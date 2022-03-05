import { IconButton, Menu, Tooltip } from "@mui/material";
import { useState } from "react";
import { Actions } from "src/types/EditorTypes";
import { useMarkdownEditor } from "src/contexts/MarkdownEditorContext";
import { EditorActionInputOption } from "./options/EditorActionInputOption";

interface Props {
  actions: Actions;
  icon: React.ReactNode;
  label: string;
}

export const EditorActionButton = ({ icon, actions, label }: Props) => {
  const { editorState, setEditorState } = useMarkdownEditor();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title={label}>
        <IconButton
          onClick={(e) =>
            Array.isArray(actions)
              ? setAnchorEl(e.currentTarget)
              : setEditorState(actions(editorState))
          }
          sx={{ borderRadius: 0, color: "#d5d7e0" }}
        >
          {icon}
        </IconButton>
      </Tooltip>

      {Array.isArray(actions) && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.3))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {actions.map((option) => {
            switch (option.type) {
              case "intput":
                return (
                  <EditorActionInputOption
                    key={option.type}
                    onSubmit={(text) => {
                      setAnchorEl(null);
                      setEditorState(option.action(text, editorState));
                    }}
                  />
                );

              default:
                return <></>;
            }
          })}
        </Menu>
      )}
    </>
  );
};
