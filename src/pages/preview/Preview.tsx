import { useParams } from "react-router-dom";
import { MarkdownRender } from "src/components/render/MarkdownRender";
import { useMarkdownPages } from "src/hooks/useMarkdownPages";
import { useMarkdownWorkspace } from "src/hooks/useMarkdownWorkspace";

export const Preview = () => {
  const { id } = useParams();
  const { pages } = useMarkdownPages(id ?? "");
  console.log(pages, id);
  return pages.map((page) => <MarkdownRender value={page.text} />);
};
