import * as Icons from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { createElement, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMarkdownPages } from "src/hooks/useMarkdownPages";
import { Paths } from "src/pages/paths";

const drawerWidth = 250;

export const LateralMenu = () => {
  const navigate = useNavigate();
  const { markdownId, pageId } = useParams();
  const { pages } = useMarkdownPages(markdownId ?? "");

  const selectedPage = useMemo(
    () => pages.find((page) => page._id === pageId)?._id ?? pages[0]?._id,
    [pageId, pages]
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        zIndex: 0,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: 9.5,
          borderRadius: 2,
          backgroundColor: "transparent",
          border: "none",
        },
      }}
    >
      <Box sx={{ overflow: "auto", px: 1 }}>
        <List>
          {pages.map((page) => {
            const isSelected = page._id === selectedPage;
            return (
              <ListItem
                button
                key={page._id}
                onClick={() =>
                  navigate({
                    pathname: Paths.PREVIEW.replace(
                      ":markdownId",
                      markdownId ?? ""
                    ).replace(":pageId", page._id),
                  })
                }
                sx={{
                  borderRadius: 2,
                  p: 1.5,
                  backgroundColor: isSelected ? "primary.main" : undefined,
                  color: isSelected ? "white" : undefined,
                }}
              >
                <ListItemIcon sx={{ color: isSelected ? "white" : undefined }}>
                  {page.icon &&
                    page.icon in (Icons as any) &&
                    (createElement((Icons as any)[page.icon as any]) as any)}
                </ListItemIcon>
                {page.title}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
