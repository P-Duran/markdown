import { Box, CircularProgress, Container } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlockRender } from "./components/CodeBlockRender";
import { DividerComponent } from "./components/DividerComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ImageComponent } from "./components/ImageComponent";
import { TableComponent } from "./components/TableComponent";

interface Props {
  value: string;
  preview?: boolean;
}

export const MarkdownRender = ({ value, preview }: Props) => {
  const [markdown, setMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeOutId = isLoading
      ? setTimeout(() => setMarkdown(value), 200)
      : undefined;
    return () => timeOutId && clearTimeout(timeOutId);
  }, [isLoading, value]);

  useEffect(() => {
    setIsLoading(true);
    const timeOutId = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeOutId);
  }, [value]);

  return (
    <Container
      maxWidth="md"
      style={{
        color: "#24292e",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            right: preview ? "47.5%" : "25%",
            backgroundColor: "#d5d7e0",
            padding: 2,
            transform: "translate(50%, -50%)",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress style={{ color: "#283039" }} />
        </Box>
      ) : (
        <Suspense fallback={"hello"}>
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            components={{
              code: CodeBlockRender,
              img: ImageComponent,
              table: TableComponent,
              h1: HeaderComponent,
              h2: HeaderComponent,
              h3: HeaderComponent,
              h4: HeaderComponent,
              h5: HeaderComponent,
              h6: HeaderComponent,
              hr: DividerComponent,
            }}
          />
        </Suspense>
      )}
    </Container>
  );
};
