import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { LoaderButton } from "src/components/buttons/LoaderButton";
import { ContextMenu } from "src/components/menus/ContextMenu";
import { useCurrentPage } from "src/hooks/useCurrentPage";
import { useMarkdownPages } from "src/hooks/useMarkdownPages";
import { useQuery } from "src/hooks/useQuery";
import { Paths } from "../paths";

const drawerWidth = 250;

export const LateralMenu = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const { pages, addPage, removePage } = useMarkdownPages(
    query.get("workspace") ?? ""
  );
  const { currentPage } = useCurrentPage();

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
        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          {[
            ...pages.map((page, index) => (
              <ContextMenu
                options={[
                  { label: "Remove", action: () => removePage(page._id) },
                ]}
              >
                <ListItem
                  button
                  key={page._id}
                  style={{
                    border:
                      currentPage?._id === page._id
                        ? "1px solid black"
                        : undefined,
                  }}
                  onClick={() =>
                    navigate({
                      pathname: Paths.EDITOR,
                      search:
                        "?workspace=" +
                        (query.get("workspace") ?? "") +
                        "&page=" +
                        page._id,
                    })
                  }
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={page.title} />
                </ListItem>
              </ContextMenu>
            )),
            <ListItem sx={{ justifyContent: "center" }}>
              <LoaderButton
                variant="border"
                onClick={() =>
                  addPage({
                    title: "Page",
                    text: "",
                    markdown: query.get("workspace") ?? "",
                  })
                }
                style={{ minWidth: 130 }}
              >
                <AddIcon />
                <Typography children="New Page" />
              </LoaderButton>
            </ListItem>,
          ]}
        </List>
      </Box>
    </Drawer>
  );
};
