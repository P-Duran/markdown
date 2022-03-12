import { CustomDecorator } from "./EditorTypes";

export type SyntaxComponent =
  | "header1"
  | "headers"
  | "image"
  | "link"
  | "code"
  | "inline"
  | "bold"
  | "italic"
  | "strikethrough";

interface EditorTheme {
  style: React.CSSProperties;
  editable: Partial<EditableTheme>;
  syntaxHighlight: Partial<Record<SyntaxComponent, CustomDecorator>>;
}

interface EditableTheme {
  style: React.CSSProperties;
}
declare module "@mui/material/styles" {
  interface Theme {
    editor: EditorTheme;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    editor?: Partial<EditorTheme>;
  }
}
