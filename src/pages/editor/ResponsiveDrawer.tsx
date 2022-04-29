import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { LoaderButton } from "src/components/buttons/LoaderButton";
import { ContextMenu } from "src/components/menus/ContextMenu";
import { useMarkdownPages } from "src/hooks/useMarkdownPages";

const drawerWidth = 250;

interface Props {
  children: React.ReactNode;
}

export const ResponsiveDrawer = ({ children }: Props) => {
  const { pages, addPage, removePage } = useMarkdownPages();

  return (
    <Box sx={{ display: "flex", width: "100%", p: 1 }}>
      <CssBaseline />
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
              ...pages.map((text, index) => (
                <ContextMenu
                  options={[
                    { label: "Remove", action: () => removePage(text) },
                  ]}
                >
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </ContextMenu>
              )),
              <ListItem sx={{ justifyContent: "center" }}>
                <LoaderButton
                  variant="border"
                  onClick={() => addPage("Page " + pages.length)}
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
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Box>
  );
};
