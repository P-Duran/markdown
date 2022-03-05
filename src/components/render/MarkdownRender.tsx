import { Container, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlockRender } from "./components/CodeBlockRender";
import { ImageComponent } from "./components/ImageComponent";
import LinearProgress from "@mui/material/LinearProgress";
import { TableComponent } from "./components/TableComponent";

interface Props {
  value: string;
}

export const MarkdownRender = ({ value }: Props) => {
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
    <Container maxWidth="md">
      {isLoading ? (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            right: "25%",
            backgroundColor: "#d5d7e0",
            padding: 2,
            transform: "translate(50%, -50%)",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress style={{color: "#283039"}}/>
        </Box>
      ) : (
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          components={{
            code: CodeBlockRender,
            img: ImageComponent,
            table: TableComponent,
          }}
        />
      )}
    </Container>
  );
};
