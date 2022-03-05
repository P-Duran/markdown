import { Container } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlockRender } from "./components/CodeBlockRender";
import { ImageComponent } from "./components/ImageComponent";

interface Props {
  value: string;
}

export const MarkdownRender = ({ value }: Props) => {
  return (
    <Container maxWidth="md">
      <ReactMarkdown
        children={value}
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlockRender,
          img: ImageComponent,
        }}
      />
    </Container>
  );
};
