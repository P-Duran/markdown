import { customCompositeDecorator } from "src/components/editor/decorators/CustomCompositeDecorator";
import { useState } from "react";
import { MarkdownEditorContext } from "src/contexts/MarkdownEditorContext";
import { ContentState, Editor, EditorState } from "draft-js";
import { useTheme } from "@mui/material";
import { MarkdownEditorContainer } from "./MarkdownEditorContainer";
interface Props {
  initialValue?: string;
  children: React.ReactNode;
}

export const MarkdownEditor = ({ initialValue, children }: Props) => {
  const theme = useTheme();

  const [editorRef, setEditorRef] = useState<Editor | null>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(initialValue ?? ""),
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
      <MarkdownEditorContainer theme={theme}>
        {children}
      </MarkdownEditorContainer>
    </MarkdownEditorContext.Provider>
  );
};
