import { Container } from "@mui/material";
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
  return (
    <Container
      maxWidth="md"
      style={{
        color: "#24292e",
      }}
    >
      <ReactMarkdown
        children={value}
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
    </Container>
  );
};
