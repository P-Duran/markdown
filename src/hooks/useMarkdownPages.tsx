import { useState } from "react";

export const useMarkdownPages = () => {
  const [pages, setPages] = useState<string[]>([]);

  const reloadPages = () => Promise.resolve(pages);

  const addPage = (name: string) =>
    Promise.resolve(setPages((old) => [...old, name]));

  const removePage = (name: string) =>
    Promise.resolve(setPages((old) => old.filter((n) => n !== name)));

  return { pages, reloadPages, addPage, removePage };
};
