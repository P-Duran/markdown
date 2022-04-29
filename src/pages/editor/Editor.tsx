import React, { ReactElement, useState } from "react";
import { Container, Grid } from "@mui/material";
import { MarkdownEditor } from "../../components/editor/MarkdownEditor";
import { MarkdownToolBar } from "../../components/editor/toolbar/MarkdownToolBar";
import { MarkdownRender } from "../../components/render/MarkdownRender";
import { editorActions } from "../../utils/EditorUtils";
import { Editable } from "src/components/editor/Editable";
import { ResponsiveDrawer } from "./ResponsiveDrawer";

export const Editor = (): ReactElement => {
  const [text, setText] = useState("");

  return (
    <ResponsiveDrawer>
      <Grid container spacing={2}>
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
          <Container
            sx={{
              backgroundColor: "white",
              p: 5,
              borderRadius: 3,
              boxShadow: 1,
              minHeight: "100%",
            }}
          >
            <MarkdownRender value={text} />
          </Container>
        </Grid>
      </Grid>
    </ResponsiveDrawer>
  );
};
