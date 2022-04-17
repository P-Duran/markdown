import { useEffect, useState } from "react";
import {
  createMarkdownWorkspace,
  deleteMarkdownWorkspace,
  getAllMarkdownWorkspaces
} from "src/api/markdownWorkspace";
import { FieldForm } from "src/components/form/FIeldForm";
import { useModal } from "src/contexts/ModalContext";
import {
  MarkdownWorkspace,
  MarkdownWorkspaceRequest
} from "src/types/MarkdownWorkspaceTypes";

export const useMarkdownWorkspace = () => {
  const [workspaces, setWorkspaces] = useState<MarkdownWorkspace[]>([]);
  const { open, close } = useModal();

  useEffect(() => {
    getAllWorkspaces();
  }, []);

  const getAllWorkspaces = () => getAllMarkdownWorkspaces().then(setWorkspaces);

  const createWorkspace = () => {
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
  };

  const deleteWorkspace = (id: string) =>
    deleteMarkdownWorkspace(id).then(getAllWorkspaces);

  return {
    workspaces: workspaces,
    createWorkspace: createWorkspace,
    deleteWorkspace: deleteWorkspace,
  };
};
