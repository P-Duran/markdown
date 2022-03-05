import { createTheme } from "@mui/material";

export const theme = createTheme({
  editor: {
    style: {
      display: "flex",
      flexFlow: "column",
      backgroundColor: "#283039",
      color: "#d5d7e0",
      height: "100%",
      minHeight: "100vh",
    },
    editable: {
      style: {
        paddingBottom: 10,
        paddingTop: 20,
        flex: 1,
        fontFamily:
          "'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'",
      },
    },
    syntaxHighlight: {
      header: {
        regex: /^# (.+)/g,
        style: { color: "#f7fbfb", fontWeight: "bold", fontSize: 20 },
      },
      image: { regex: /!\[(.*?)\]\((.*?)\)/g, style: { color: "#47ffc2" } },
      link: { regex: /\[(.*?)\]\((.*?)\)/g, style: { color: "#4dcfff" } },
      code: {
        regex: /```[A-Za-z]*/g,
        style: { backgroundColor: "#ffc800", color: "#616161" },
      },
      inline: {
        regex: /`(.+?)`/g,
        style: { backgroundColor: "#d9d9d9", color: "#4d4d4d" },
      },
      bold: {
        regex: /\*\*(.*?)\*\*/g,
        style: { fontWeight: "bold", color: "whitesmoke" },
      },
      italic: {
        regex: /\*(.*?)\*/g,
        style: { fontStyle: "italic", color: "whitesmoke" },
      },
      strikethrough: {
        regex: /~~(.*?)~~/g,
        style: { textDecoration: "line-through", color: "whitesmoke" },
      },
    },
  },
});
