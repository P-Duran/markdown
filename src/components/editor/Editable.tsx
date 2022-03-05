import { Container, useTheme } from "@mui/material";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useEffect } from "react";
import { useMarkdownEditor } from "src/contexts/MarkdownEditorContext";
import { replaceSelectedText } from "src/utils/EditorUtils";

interface Props {
  onChange?: (editorState: EditorState) => void;
}

export const Editable = ({ onChange = () => {} }: Props) => {
  const { editorState, setEditorState, editorRef, setEditorRef } =
    useMarkdownEditor();

  const theme = useTheme();

  useEffect(() => {
    const timeOutId = setTimeout(() => onChange(editorState), 500);
    return () => clearTimeout(timeOutId);
  }, [editorState, onChange]);

  return (
    <Container
      onClick={() => editorRef?.focus()}
      style={theme.editor.editable.style}
    >
      <Editor
        editorState={editorState}
        onTab={(e) => {
          e.preventDefault();
          setEditorState(replaceSelectedText(editorState, (_) => "    "));
        }}
        onChange={(state) => {
          console.log("state");
          setEditorState(state);
        }}
        ref={(draftEditor) => setEditorRef(draftEditor)}
      />
    </Container>
  );
};
