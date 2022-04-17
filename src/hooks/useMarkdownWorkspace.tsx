import { useEffect, useState } from "react";
import {
  createMarkdownWorkspace,
  deleteMarkdownWorkspace,
  getAllMarkdownWorkspaces,
} from "src/api/markdownWorkspace";
import {
  MarkdownWorkspace,
  MarkdownWorkspaceRequest,
} from "src/types/MarkdownWorkspaceTypes";

export const useMarkdownWorkspace = () => {
  const [workspaces, setWorkspaces] = useState<MarkdownWorkspace[]>([]);

  useEffect(() => {
    getAllWorkspaces();
  }, []);

  const getAllWorkspaces = () => getAllMarkdownWorkspaces().then(setWorkspaces);

  const createWorkspace = (request: MarkdownWorkspaceRequest) =>
    createMarkdownWorkspace(request).then(getAllWorkspaces);

  const deleteWorkspace = (id: string) =>
    deleteMarkdownWorkspace(id).then(getAllWorkspaces);

  return {
    workspaces: workspaces,
    createWorkspace: createWorkspace,
    deleteWorkspace: deleteWorkspace,
  };
};
