import { createContext, useContext } from "react";
import { Editor, EditorState } from "draft-js";

export interface EditorContext {
  setEditorState: (context: EditorState) => void;
  editorState: EditorState;
  editorRef: Editor | null;
  setEditorRef: (ref: Editor | null) => void;
}

export const initializeContext = (): EditorContext => {
  return {
    editorState: EditorState.createEmpty(),
    setEditorState: () => {},
    editorRef: null,
    setEditorRef: () => {},
  };
};

export const MarkdownEditorContext = createContext(initializeContext());

export const useMarkdownEditor = () => useContext(MarkdownEditorContext);
