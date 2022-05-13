import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMarkdownPages } from "src/hooks/useMarkdownPages";
import { useQuery } from "src/hooks/useQuery";

export const useCurrentPage = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const { pages } = useMarkdownPages(query.get("workspace") ?? "");

  const currentPage = useMemo(
    () => pages.find((page) => page._id === query.get("page")),
    [pages, query]
  );

  const selectPage = (id: string) => {
    navigate({
      search: "?workspace=" + (query.get("workspace") ?? "") + "&page=" + id,
    });
    return pages.find((page) => page._id === id);
  };

  const selecFirst = useCallback(() => {
    if (pages.length > 0) {
      navigate({
        search:
          "?workspace=" +
          (query.get("workspace") ?? "") +
          "&page=" +
          pages[0]._id,
      });
      return pages[0]._id;
    } else {
      return;
    }
  }, [navigate, pages, query]);

  useEffect(() => {
    if (!query.get("page")) {
      selecFirst();
    }
  }, [query, selecFirst]);

  return { currentPage, selectPage, selecFirst };
};
