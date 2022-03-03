import React, { ReactElement, useState } from "react";
import { Grid } from "@mui/material";
import { defaultDecorators } from "../../components/editor/decorators/CustomCompositeDecorator";
import { MarkdownEditor } from "../../components/editor/MarkdownEditor";
import { MarkdownToolBar } from "../../components/editor/toolbar/MarkdownToolBar";
import { MarkdownRender } from "../../components/render/MarkdownRender";
import { editorActions } from "../../utils/EditorUtils";
import { useNavigate } from "react-router-dom";

export const Editor = (): ReactElement => {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const onHomePageNavigate = () => {
    navigate("/");
  };

  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <button onClick={onHomePageNavigate}>Home</button>
        <MarkdownEditor
          decorators={defaultDecorators}
          onChange={(state) =>
            setText(state.getCurrentContent().getPlainText())
          }
          toolbar={<MarkdownToolBar editorActions={editorActions} />}
        />
      </Grid>
      <Grid item sm={6}>
        <MarkdownRender value={text} />
      </Grid>
    </Grid>
  );
};
