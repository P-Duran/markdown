import { Box, Container, Stack } from "@mui/material";
import { motion } from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as theme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useSnackbar } from "notistack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CodeProps } from "react-markdown/lib/ast-to-react";

export const CodeBlockRender = ({
  node,
  inline,
  className,
  children,
  ...props
}: CodeProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const code = String(children).replace(/\n$/, "");
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <Container
      style={{
        backgroundColor: theme.hljs.color,
        padding: 40,
        marginTop: 40,
        marginBottom: 40,
        textAlign: "center",
      }}
    >
      <div
        style={{
          ...theme.hljs,
          boxShadow: "0 5px 28px rgba(0, 0, 0, 0.55)",
          borderRadius: 10,
          textAlign: "start",
          display: "inline-block",
          minWidth: "40%",
          maxWidth: "100%",
        }}
      >
        <Stack
          spacing={1}
          direction="row"
          alignItems="initial"
          style={{ padding: 15 }}
        >
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((color) => (
            <motion.div
              key={color}
              style={{
                borderRadius: "50%",
                backgroundColor: color,
                height: 12,
                width: 12,
              }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
          <Box sx={{ flexGrow: 1 }}></Box>
          <motion.div
            style={{ color: theme.hljs.color }}
            whileHover={{
              scale: 1.05,
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigator.clipboard.writeText(code);
              enqueueSnackbar("Content copied to clipboard", {
                variant: "success",
                preventDuplicate: true,
              });
            }}
          >
            <ContentCopyIcon fontSize="small" />
          </motion.div>
        </Stack>
        <SyntaxHighlighter
          customStyle={{
            border: "none",
            margin: 10,
            scrollbarWidth: "thin",
            overflowY: "hidden",
          }}
          children={code}
          style={theme}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      </div>
    </Container>
  ) : (
    <code
      className={className}
      style={{
        backgroundColor: "rgba(27,31,35,.05)",
        color: "#e96900",
        padding: ".2em .4em",
        fontSize: "85%",
        borderRadius: "6px",
      }}
      {...props}
    >
      {children}
    </code>
  );
};
