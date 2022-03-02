import { Grid, Stack, Container, Box } from "@mui/material";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";
import { defaultDecorators } from "./components/editor/decorators/CustomCompositeDecorator";
import { MarkdownEditor } from "./components/editor/MarkdownEditor";
import { MarkdownToolBar } from "./components/editor/toolbar/MarkdownToolBar";
import { editorActions } from "./utils/EditorUtils";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as theme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { motion } from "framer-motion";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useSnackbar } from "notistack";

function App() {
  const [text, setText] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <MarkdownEditor
          decorators={defaultDecorators}
          onTextChange={setText}
          toolbar={<MarkdownToolBar editorActions={editorActions} />}
        />
      </Grid>
      <Grid item sm={12}>
        <Container maxWidth="md">
          <ReactMarkdown
            children={text}
            remarkPlugins={[remarkGfm]}
            components={{
              code: ({ node, inline, className, children, ...props }) => {
                console.log(theme);
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
                        minWidth: 400,
                        maxWidth: "100%"
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
                          onClick={() =>
                            enqueueSnackbar("Content copied to clipboard", {
                              variant: "success",
                              preventDuplicate: true,
                            })
                          }
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
                        children={String(children).replace(/\n$/, "")}
                        style={theme}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    </div>
                  </Container>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
