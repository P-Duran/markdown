import { Grid } from "@mui/material";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "./App.css";
import { MarkdownEditor } from "./components/editor/MarkdownEditor";
import { MarkdownToolBar } from "./components/editor/toolbar/MarkdownToolBar";
import { editorActions } from "./utils/EditorUtils";

function App() {
  const [text, setText] = useState("");
  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <MarkdownEditor
          onTextChange={setText}
          toolbar={<MarkdownToolBar editorActions={editorActions} />}
        />
      </Grid>
      <Grid item sm={6}>
        <ReactMarkdown
          children={text}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
      </Grid>
    </Grid>
  );
}

export default App;
