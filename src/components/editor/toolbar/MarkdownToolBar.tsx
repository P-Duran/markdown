import { Divider, Grid } from "@mui/material";
import { ContentState, EditorState } from "draft-js";
import React, { useEffect, useMemo, useState } from "react";
import { useMarkdownEditor } from "src/contexts/MarkdownEditorContext";
import { useMarkdownPages } from "src/hooks/useMarkdownPages";
import { useQuery } from "src/hooks/useQuery";
import { EditorAction } from "src/types/EditorTypes";
import { EditorActionButton } from "./EditorActionButton";

interface Props {
  editorActions: Record<string, EditorAction[]>;
}

export const MarkdownToolBar = ({ editorActions }: Props) => {
  const query = useQuery();
  const { pages } = useMarkdownPages(query.get("workspace") ?? "");
  const { setEditorState } = useMarkdownEditor();

  const currentPage = useMemo(
    () => pages.find((page) => page._id === query.get("page")),
    [pages, query]
  );

  useEffect(() => {
    console.log(currentPage);
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromText(currentPage?.text ?? "")
      )
    );
  }, [currentPage, setEditorState]);

  return (
    <>
      <Grid
        container
        direction="row"
        style={{ paddingLeft: 10, paddingRight: 10 }}
      >
        {Object.entries(editorActions).map(([key, value], i) => (
          <React.Fragment key={key}>
            {value.map((editorAction) => (
              <Grid item key={editorAction.label + key}>
                <EditorActionButton
                  label={editorAction.label}
                  icon={editorAction.icon}
                  actions={editorAction.actions}
                ></EditorActionButton>
              </Grid>
            ))}
            {i !== Object.entries(editorActions).length - 1 && (
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ backgroundColor: "#3f4a57" }}
              />
            )}
          </React.Fragment>
        ))}
      </Grid>
      <Divider variant="fullWidth" sx={{ backgroundColor: "#3f4a57" }} />
    </>
  );
};
