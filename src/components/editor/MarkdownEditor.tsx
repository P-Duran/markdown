import { useTheme } from "@mui/material";
import { ContentState, Editor, EditorState } from "draft-js";
import { useCallback, useEffect, useState } from "react";
import { customCompositeDecorator } from "src/components/editor/decorators/CustomCompositeDecorator";
import { MarkdownEditorContext } from "src/contexts/MarkdownEditorContext";
import { MarkdownEditorContainer } from "./MarkdownEditorContainer";
interface Props {
  initialValue?: string;
  children: React.ReactNode;
}

export const MarkdownEditor = ({ initialValue, children }: Props) => {
  const theme = useTheme();

  const [editorRef, setEditorRef] = useState<Editor | null>(null);

  const createContext = useCallback(
    (value?: string) =>
      EditorState.createWithContent(
        ContentState.createFromText(value ?? ""),
        customCompositeDecorator(Object.values(theme.editor.syntaxHighlight))
      ),
    [theme.editor.syntaxHighlight]
  );

  const [editorState, setEditorState] = useState(() =>
    createContext(initialValue)
  );

  useEffect(() => {
    setEditorState(createContext(initialValue));
  }, [createContext, initialValue]);

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
