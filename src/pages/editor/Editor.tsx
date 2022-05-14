import { Container, Grid } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { Editable } from "src/components/editor/Editable";
import { usePageContent } from "src/hooks/usePageContent";
import { useQuery } from "src/hooks/useQuery";
import { MarkdownEditor } from "../../components/editor/MarkdownEditor";
import { MarkdownToolBar } from "../../components/editor/toolbar/MarkdownToolBar";
import { MarkdownRender } from "../../components/render/MarkdownRender";
import { editorActions } from "../../utils/EditorUtils";
import { ResponsiveDrawer } from "./ResponsiveDrawer";

export const Editor = (): ReactElement => {
  const [initialValue, setInitialValue] = useState<string>();
  const query = useQuery();
  const currentPage = query.get("page");
  const { content, setContent } = usePageContent(
    query.get("workspace") ?? "",
    currentPage ?? ""
  );

  useEffect(() => {
    if (initialValue === undefined) {
      setInitialValue(content ?? "");
    }
  }, [content, initialValue]);

  useEffect(() => {
    setInitialValue(undefined);
  }, [currentPage]);

  return (
    <ResponsiveDrawer>
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
    </ResponsiveDrawer>
  );
};
