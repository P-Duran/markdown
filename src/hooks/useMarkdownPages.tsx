import { useSnackbar } from "notistack";
import React, { useCallback, useEffect, useState } from "react";
import {
  createMarkdownPage,
  deleteMarkdownPage,
  getAllMarkdownPages,
  updateMarkdownPage,
} from "src/api/markdownPage";
import { FieldForm } from "src/components/form/FIeldForm";
import { IconSelector } from "src/components/iconSelector/IconSelector";
import { useModal } from "src/contexts/ModalContext";
import {
  MarkdownPage,
  MarkdownPageUpdateRequest,
} from "src/types/MarkdownPageTypes";

export const useMarkdownPages = (workspaceId: string, preload = true) => {
  const { enqueueSnackbar } = useSnackbar();
  const { open, close } = useModal();
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
    () =>
      open({
        components: (
          <FieldForm
            title=""
            subtitle="Create Workspace Page"
            submitText="Create"
            fieldsData={[
              { key: "title", label: "Title" },
              {
                key: "icon",
                label: "Icon",
                render: (handleOnChange) => (
                  <IconSelector onChange={handleOnChange} />
                ),
              },
            ]}
            onSubmit={(request) =>
              createMarkdownPage({
                title: request["title"],
                text: "",
                icon: request["icon"],
                markdown: workspaceId,
              })
                .then(getAllPages)
                .catch((err) =>
                  enqueueSnackbar(err.response.data, {
                    variant: "error",
                    preventDuplicate: true,
                  })
                )
                .then(close)
            }
          />
        ),
      }),
    [close, enqueueSnackbar, getAllPages, open, workspaceId]
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
