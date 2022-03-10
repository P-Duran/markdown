import { CustomDecorator } from "src/types/EditorTypes";
import { customCompositeDecorator } from "src/components/editor/decorators/CustomCompositeDecorator";
import { useState } from "react";
import { MarkdownEditorContext } from "src/contexts/MarkdownEditorContext";
import { Editor, EditorState } from "draft-js";
import { useTheme } from "@mui/material";
interface Props {
  children: React.ReactNode;
}

export const MarkdownEditor = ({ children }: Props) => {
  const theme = useTheme();

  const [editorRef, setEditorRef] = useState<Editor | null>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(
      customCompositeDecorator(Object.values(theme.editor.syntaxHighlight))
    )
  );

  return (
    <MarkdownEditorContext.Provider
      value={{
        editorState: editorState,
        setEditorState: setEditorState,
        editorRef: editorRef,
        setEditorRef: setEditorRef,
      }}
    >
      <div style={theme.editor.style}>{children}</div>
    </MarkdownEditorContext.Provider>
  );
};
