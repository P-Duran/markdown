import { Theme } from "@mui/material";
import { styled } from "@mui/system";

type Props = {
  theme: Theme;
};

export const MarkdownEditorContainer = styled("div")(({ theme }: Props) => ({
  ...theme.editor.style,
  [theme.breakpoints.only("xs")]: {
    minHeight: "calc(100vh - 56px)",
  },
}));
