import { Box, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { MarkdownRender } from "src/components/render/MarkdownRender";
import { useMarkdownPages } from "src/hooks/useMarkdownPages";
import { LateralMenu } from "./components/LateralMenu";

export const Preview = () => {
  const { markdownId, pageId } = useParams();
  const { pages } = useMarkdownPages(markdownId ?? "");
  const currentPage = useMemo(
    () => pages.find((page) => page._id === pageId) ?? pages[0],
    [pageId, pages]
  );

  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <CssBaseline />
      <LateralMenu />
      <Box sx={{ flexGrow: 1, backgroundColor: "white", p: 1 }}>
        <MarkdownRender value={currentPage?.text ?? ""} delayMultiplier={0} />
      </Box>
    </Box>
  );
};
