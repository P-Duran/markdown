export interface MarkdownWorkspace {
  _id: string;
  name: string;
  user: string;
  pages: number;
  preview: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarkdownWorkspaceRequest {
  name: string;
}
