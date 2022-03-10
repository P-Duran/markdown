import React, { ReactElement, useState } from "react";
import { Grid } from "@mui/material";
import { MarkdownEditor } from "../../components/editor/MarkdownEditor";
import { MarkdownToolBar } from "../../components/editor/toolbar/MarkdownToolBar";
import { MarkdownRender } from "../../components/render/MarkdownRender";
import { editorActions } from "../../utils/EditorUtils";
import { useNavigate } from "react-router-dom";
import { Editable } from "src/components/editor/Editable";

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
