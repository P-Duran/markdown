import { Divider, Stack } from "@mui/material";
import React from "react";
import { EditorAction } from "src/types/EditorTypes";
import { EditorActionButton } from "./EditorActionButton";

interface Props {
  editorActions: Record<string, EditorAction[]>;
}

export const MarkdownToolBar = ({ editorActions }: Props) => {
  return (
    <>
      <Stack direction="row" style={{ paddingLeft: 10, paddingRight: 10 }}>
        {Object.entries(editorActions).map(([key, value], i) => (
          <React.Fragment key={key}>
            {value.map((editorAction, j) => (
              <EditorActionButton
                key={editorAction.label + key}
                label={editorAction.label}
                icon={editorAction.icon}
                actions={editorAction.actions}
              ></EditorActionButton>
            ))}
            {i !== Object.entries(editorActions).length - 1 && (
              <Divider orientation="vertical" variant="middle" flexItem />
            )}
          </React.Fragment>
        ))}
      </Stack>
      <Divider variant="fullWidth" />
    </>
  );
};
