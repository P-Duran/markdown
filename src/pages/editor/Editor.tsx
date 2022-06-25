import { Container, Fade, Grid } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editable } from "src/components/editor/Editable";
import { useMarkdownPages } from "src/hooks/useMarkdownPages";
import { usePageContent } from "src/hooks/usePageContent";
import { useQuery } from "src/hooks/useQuery";
import { MarkdownEditor } from "../../components/editor/MarkdownEditor";
import { MarkdownToolBar } from "../../components/editor/toolbar/MarkdownToolBar";
import { MarkdownRender } from "../../components/render/MarkdownRender";
import { editorActions } from "../../utils/EditorUtils";
import { Paths } from "../paths";
import { ResponsiveDrawer } from "./ResponsiveDrawer";

export const Editor = (): ReactElement => {
  const [initialValue, setInitialValue] = useState<string>();
  const navigate = useNavigate();
  const query = useQuery();
  const currentPage = query.get("page");
  const { pages } = useMarkdownPages(query.get("workspace") ?? "");
  const { content, setContent } = usePageContent(
    query.get("workspace") ?? "",
    currentPage ?? ""
  );

  useEffect(() => {
    setInitialValue(undefined);
  }, [currentPage]);

  useEffect(() => {
    if (initialValue === undefined && !!query.get("page")) {
      setInitialValue(content);
    }
  }, [content, initialValue, query]);

  useEffect(() => {
    pages.length &&
      !currentPage &&
      navigate({
        pathname: Paths.EDITOR,
        search:
          "?workspace=" +
          (query.get("workspace") ?? "") +
          "&page=" +
          pages[0]?._id,
      });
  }, [currentPage, navigate, pages, query]);

  return (
    <ResponsiveDrawer>
      {currentPage && pages.length ? (
        <Fade in={true} >
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <MarkdownEditor initialValue={initialValue}>
                <MarkdownToolBar editorActions={editorActions} />
                <Editable
                  onChange={(state) => {
                    setContent(state.getCurrentContent().getPlainText());
                  }}
                />
              </MarkdownEditor>
            </Grid>
            <Grid item sm={6}>
              <Container
                sx={{
                  backgroundColor: "white",
                  p: 5,
                  borderRadius: 3,
                  boxShadow: 1,
                  minHeight: "100%",
                }}
              >
                <MarkdownRender value={content ?? ""} />
              </Container>
            </Grid>
          </Grid>
        </Fade>
      ) : (
        <></>
      )}
    </ResponsiveDrawer>
  );
};
