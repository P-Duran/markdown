import {
  MarkdownPage,
  MarkdownPageRequest,
  MarkdownPageUpdateRequest,
} from "src/types/MarkdownPageTypes";
import { client } from "./client";
import { MARKDOWN_PAGE_PATH } from "./paths";

const restApi = client;

export const getAllMarkdownPages = (
  workspace: string
): Promise<MarkdownPage[]> => {
  return restApi
    .get(MARKDOWN_PAGE_PATH, { params: { markdown: workspace } })
    .then((response) => response.data as MarkdownPage[]);
};

export const createMarkdownPage = (
  request: MarkdownPageRequest
): Promise<MarkdownPageRequest> => {
  return restApi
    .post(MARKDOWN_PAGE_PATH + "/", request)
    .then((response) => response.data as MarkdownPageRequest);
};

export const deleteMarkdownPage = (id: string): Promise<void> => {
  return restApi.delete(MARKDOWN_PAGE_PATH + "/" + id);
};

export const updateMarkdownPage = (
  request: MarkdownPageUpdateRequest
): Promise<MarkdownPageUpdateRequest> => {
  return restApi
    .post(MARKDOWN_PAGE_PATH + "/", request)
    .then((response) => response.data as MarkdownPageUpdateRequest);
};
