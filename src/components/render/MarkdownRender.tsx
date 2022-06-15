import { CircularProgress, Container } from "@mui/material";
import React, { Suspense, useMemo } from "react";
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

export const MarkdownRender = ({ value }: Props) => {
  const LazyLargeComponent = useMemo(
    () =>
      React.lazy(() => {
        return new Promise((resolve) =>
          setTimeout(resolve, Math.max(value.length, 5000) / 10)
        ).then(() => import("react-markdown"));
      }),
    [value.length]
  );

  return (
    <Container
      maxWidth="md"
      style={{
        color: "#24292e",
        overflow: "clip",
      }}
    >
      <Suspense
        fallback={
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Container>
        }
      >
        <LazyLargeComponent
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
      </Suspense>
    </Container>
  );
};
