import { useCallback } from "react";
import { useMarkdownPages } from "./useMarkdownPages";

export const usePageContent = (workspaceId: string, pageId: string) => {
  const { pages, updatePage } = useMarkdownPages(workspaceId);

  const setContent = useCallback(
    (text) => updatePage({ _id: pageId, text: text }),
    [pageId, updatePage]
  );

  return {
    content: pages.find((page) => page._id === pageId)?.text,
    setContent,
  };
};
