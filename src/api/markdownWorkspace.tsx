import {
  MarkdownWorkspace,
  MarkdownWorkspaceRequest,
} from "src/types/MarkdownWorkspaceTypes";
import { client } from "./client";
import { MARKDOWN_WORKSPACE_PATH } from "./paths";

const restApi = client;

export const getAllMarkdownWorkspaces = (): Promise<MarkdownWorkspace[]> => {
  return restApi
    .get(MARKDOWN_WORKSPACE_PATH + "/")
    .then((response) => response.data as MarkdownWorkspace[]);
};

export const createMarkdownWorkspace = (
  request: MarkdownWorkspaceRequest
): Promise<MarkdownWorkspaceRequest> => {
  return restApi
    .post(MARKDOWN_WORKSPACE_PATH + "/", request)
    .then((response) => response.data as MarkdownWorkspaceRequest);
};

export const deleteMarkdownWorkspace = (id: string): Promise<void> => {
  return restApi.delete(MARKDOWN_WORKSPACE_PATH + "/" + id);
};
