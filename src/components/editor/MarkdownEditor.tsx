import { Container } from "@mui/material";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";
import { MarkdownEditorContext } from "src/contexts/MarkdownEditorContext";
import { CustomDecorator } from "src/types/EditorTypes";
import { customCompositeDecorator } from "./decorators/CustomCompositeDecorator";

interface Props {
  toolbar?: React.ReactNode;
  onTextChange?: (text: string) => void;
  decorators?: CustomDecorator[];
}

export const MarkdownEditor = ({
  toolbar,
  decorators,
  onTextChange = () => {},
}: Props) => {
  const [ref, setRef] = useState<Editor | null>();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(
      decorators ? customCompositeDecorator(decorators) : undefined
    )
  );

  return (
    <div style={{ border: "1px solid #e3e3e3" }}>
      <MarkdownEditorContext.Provider
        value={{ editorState: editorState, setEditorState: setEditorState }}
      >
        {toolbar}
      </MarkdownEditorContext.Provider>
      <Container
        onClick={() => ref?.focus()}
        style={{
          minHeight: 300,
          paddingBottom: 10,
          paddingTop: 20,
          fontFamily:
            "'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'",
        }}
      >
        <Editor
          editorState={editorState}
          onChange={(state) => {
            setEditorState(state);
            onTextChange(state.getCurrentContent().getPlainText());
          }}
          ref={(draftEditor) => setRef(draftEditor)}
        />
      </Container>
    </div>
  );
};
