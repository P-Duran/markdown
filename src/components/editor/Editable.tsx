import { Container, useTheme } from "@mui/material";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useMarkdownEditor } from "src/contexts/MarkdownEditorContext";
import { replaceSelectedText } from "src/utils/EditorUtils";

interface Props {
  onChange?: (editorState: EditorState) => void;
  delay?: number;
}

export const Editable = ({ delay = 500, onChange = () => {} }: Props) => {
  const { editorState, setEditorState, editorRef, setEditorRef } =
    useMarkdownEditor();

  const theme = useTheme();

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
          setEditorState(state);
          onChange(state);
        }}
        ref={(draftEditor) => setEditorRef(draftEditor)}
      />
    </Container>
  );
};
