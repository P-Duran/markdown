export interface MarkdownPage {
  _id: string;
  title: string;
  text: string;
  user: string;
  markdown: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarkdownPageRequest {
  title: string;
  text: string;
  markdown: string;
}

export interface MarkdownPageUpdateRequest {
  _id: string;
  title?: string;
  text?: string;
  markdown?: string;
}
