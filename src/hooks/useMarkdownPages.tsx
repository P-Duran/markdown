import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import {
  createMarkdownPage,
  deleteMarkdownPage,
  getAllMarkdownPages,
  updateMarkdownPage,
} from "src/api/markdownPage";
import {
  MarkdownPage,
  MarkdownPageRequest,
  MarkdownPageUpdateRequest,
} from "src/types/MarkdownPageTypes";

export const useMarkdownPages = (workspaceId: string, preload = true) => {
  const { enqueueSnackbar } = useSnackbar();

  const [pages, setPages] = useState<MarkdownPage[]>([]);

  const getAllPages = useCallback(
    () =>
      getAllMarkdownPages(workspaceId)
        .then(setPages)
        .catch((err) =>
          enqueueSnackbar(err.response.data, {
            variant: "error",
            preventDuplicate: true,
          })
        ),
    [enqueueSnackbar, workspaceId]
  );

  const addPage = useCallback(
    (request: MarkdownPageRequest) =>
      createMarkdownPage(request)
        .then(getAllPages)
        .catch((err) =>
          enqueueSnackbar(err.response.data, {
            variant: "error",
            preventDuplicate: true,
          })
        ),
    [enqueueSnackbar, getAllPages]
  );

  const removePage = useCallback(
    (id: string) =>
      deleteMarkdownPage(id)
        .then(getAllPages)
        .catch((err) =>
          enqueueSnackbar(err.response.data, {
            variant: "error",
            preventDuplicate: true,
          })
        ),
    [enqueueSnackbar, getAllPages]
  );

  const updatePage = useCallback(
    (request: MarkdownPageUpdateRequest) =>
      updateMarkdownPage(request)
        .then(getAllPages)
        .catch((err) =>
          enqueueSnackbar(err.response.data, {
            variant: "error",
            preventDuplicate: true,
          })
        ),
    [enqueueSnackbar, getAllPages]
  );

  useEffect(() => {
    if (preload) {
      getAllPages();
    }
  }, [getAllPages, preload]);

  return { pages, getAllPages, addPage, removePage, updatePage };
};
