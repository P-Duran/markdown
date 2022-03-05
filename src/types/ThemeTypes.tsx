import { CustomDecorator } from "./EditorTypes";

export type SyntaxComponent =
  | "header"
  | "image"
  | "link"
  | "code"
  | "inline"
  | "bold"
  | "italic"
  | "strikethrough";

declare module "@mui/material/styles" {
  interface Theme {
    editor: {
      style: React.CSSProperties;
      editable: {
        style: React.CSSProperties;
      };
      syntaxHighlight: Record<SyntaxComponent, CustomDecorator>;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    editor: {
      style: React.CSSProperties;
      editable: {
        style: React.CSSProperties;
      };
      syntaxHighlight: Record<SyntaxComponent, CustomDecorator>;
    };
  }
}
