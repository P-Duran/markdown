import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlockRender } from "./components/CodeBlockRender";
import { ImageComponent } from "./components/ImageComponent";
import LinearProgress from "@mui/material/LinearProgress";

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
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          components={{
            code: CodeBlockRender,
            img: ImageComponent,
          }}
        />
      )}
    </Container>
  );
};
