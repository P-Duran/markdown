import { Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
  createMarkdownWorkspace,
  deleteMarkdownWorkspace,
  getAllMarkdownWorkspaces,
} from "src/api/markdownWorkspace";
import { BasicButton } from "src/components/buttons/BasicButton";
import { LoaderButton } from "src/components/buttons/LoaderButton";
import { FieldForm } from "src/components/form/FIeldForm";
import { useModal } from "src/contexts/ModalContext";
import {
  MarkdownWorkspace,
  MarkdownWorkspaceRequest,
} from "src/types/MarkdownWorkspaceTypes";

export const useMarkdownWorkspace = () => {
  const [workspaces, setWorkspaces] = useState<MarkdownWorkspace[]>([]);
  const { open, close } = useModal();

  const getAllWorkspaces = useCallback(
    () => getAllMarkdownWorkspaces().then(setWorkspaces),
    []
  );

  const createWorkspace = useCallback(() => {
    open({
      components: (
        <FieldForm
          title=""
          subtitle="Create Workspace"
          submitText="Create"
          fieldsData={[{ key: "name", label: "Name" }]}
          onSubmit={(request) =>
            createMarkdownWorkspace(
              request as unknown as MarkdownWorkspaceRequest
            )
              .then(getAllWorkspaces)
              .then(close)
          }
        />
      ),
    });
  }, [close, getAllWorkspaces, open]);

  const deleteWorkspace = useCallback(
    (id: string) =>
      open({
        components: (
          <Stack justifyContent="center" spacing={4}>
            <Typography variant="h4">
              {"Are you sure you want to remove this markdown?"}
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center">
              <BasicButton
                variant="border"
                onClick={close}
                style={{
                  width: 100,
                }}
              >
                <Typography children="Cancel" />
              </BasicButton>
              <LoaderButton
                variant="destructive"
                onClick={() =>
                  deleteMarkdownWorkspace(id).then(getAllWorkspaces).then(close)
                }
                style={{
                  width: 100,
                }}
              >
                <Typography sx={{ color: "white" }} children="Remove" />
              </LoaderButton>
            </Stack>
          </Stack>
        ),
      }),
    [close, getAllWorkspaces, open]
  );

  useEffect(() => {
    getAllWorkspaces();
  }, [getAllWorkspaces]);

  return {
    workspaces: workspaces,
    createWorkspace: createWorkspace,
    deleteWorkspace: deleteWorkspace,
  };
};
