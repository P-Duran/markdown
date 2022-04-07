import React, { ReactElement, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { MarkdownEditor } from "../../components/editor/MarkdownEditor";
import { MarkdownToolBar } from "../../components/editor/toolbar/MarkdownToolBar";
import { MarkdownRender } from "../../components/render/MarkdownRender";
import { editorActions } from "../../utils/EditorUtils";
import { Editable } from "src/components/editor/Editable";
import { WorkspaceNavigation } from "src/components/editor/workspaceNavigation/workspaceNavigation";
import { pagesPreviewMock } from "src/mocks/pagesPreviewMock";

export const Editor = (): ReactElement => {
  const [text, setText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Grid
      container
      spacing={2}
      ref={containerRef}
      sx={{ position: "relative" }}
    >
      <WorkspaceNavigation
        containerRef={containerRef}
        pages={pagesPreviewMock}
      />
      <Grid item sm={6}>
        <MarkdownEditor>
          <MarkdownToolBar editorActions={editorActions} />
          <Editable
            onChange={(state) => {
              setText(state.getCurrentContent().getPlainText());
            }}
          />
        </MarkdownEditor>
      </Grid>
      <Grid item sm={6}>
        <MarkdownRender value={text} />
      </Grid>
    </Grid>
  );
};
