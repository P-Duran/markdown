import { EditorState } from "draft-js";

export type EditorAction = EditorActionSimple;

export interface EditorActionSimple {
  label: string;
  actions: Actions;
  icon: React.ReactNode;
}

export type Actions = Action | ActionOption[];

export type Action = (editorState: EditorState) => EditorState;

export interface ActionOption {
  type: "intput";
  action: (algo: string, editorState: EditorState) => EditorState;
}

export interface CustomDecorator {
  regex: RegExp;
  style?: React.CSSProperties;
}
