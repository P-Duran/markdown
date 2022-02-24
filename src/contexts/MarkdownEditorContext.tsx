import { createContext, useContext } from "react";
import { EditorState } from "draft-js";

export interface EditorContext {
  setEditorState: (context: EditorState) => void;
  editorState: EditorState;
}

export const initializeContext = (): EditorContext => {
  return {
    editorState: EditorState.createEmpty(),
    setEditorState: () => {},
  };
};

export const MarkdownEditorContext = createContext(initializeContext());

export const useMarkdownEditor = () => useContext(MarkdownEditorContext);
