import { Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { defaultDecorators } from "./components/editor/decorators/CustomCompositeDecorator";
import { MarkdownEditor } from "./components/editor/MarkdownEditor";
import { MarkdownToolBar } from "./components/editor/toolbar/MarkdownToolBar";
import { MarkdownRender } from "./components/render/MarkdownRender";
import { editorActions } from "./utils/EditorUtils";

function App() {
  const [text, setText] = useState("");

  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
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
}

export default App;
