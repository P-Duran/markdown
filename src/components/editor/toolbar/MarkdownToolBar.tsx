import { Divider, Grid } from "@mui/material";
import React from "react";
import { EditorAction } from "src/types/EditorTypes";
import { EditorActionButton } from "./EditorActionButton";

interface Props {
  editorActions: Record<string, EditorAction[]>;
}

export const MarkdownToolBar = ({ editorActions }: Props) => {
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
