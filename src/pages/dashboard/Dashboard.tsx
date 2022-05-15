import AddIcon from "@mui/icons-material/Add";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import TuneIcon from "@mui/icons-material/Tune";
import { Grid, Stack, Typography } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { MenuButton } from "src/components/buttons/MenuButton";
import { SimpleButton } from "src/components/buttons/SimpleButton";
import { MarkdownWorkspaceRender } from "src/components/markdownWorkspace/MarkdownWorkspace";
import { useOptionsBar } from "src/contexts/OptionsBarContext";
import { useMarkdownWorkspace } from "src/hooks/useMarkdownWorkspace";
import { MenuOption } from "src/types/MenuButtonTypes";

const settingOptions: MenuOption[] = [
  { label: "Name", action: () => undefined, icon: <ExpandLessIcon /> },
];

export const Dashboard = (): ReactElement => {
  const { show } = useOptionsBar();
  const { workspaces, createWorkspace, deleteWorkspace } =
    useMarkdownWorkspace();

  useEffect(() => {
    show({
      children: {
        group1: (
          <Stack spacing={2} direction="row" alignItems="center">
            <MenuButton
              options={settingOptions}
              itemSx={{ px: 1.5, py: 1 }}
              buttonRender={({ onOpen }) => (
                <SimpleButton onClick={(e) => onOpen(e.currentTarget)}>
                  <TuneIcon fontSize="small" sx={{ pr: 1 }} />
                  <Typography variant="subtitle2">Sort</Typography>
                </SimpleButton>
              )}
            />
            <Typography variant="subtitle2">
              {workspaces.length} Markdowns in total
            </Typography>
          </Stack>
        ),
        group2: (
          <SimpleButton
            onClick={createWorkspace}
            sx={{ color: "white", backgroundColor: "primary.main" }}
          >
            New Markdown
            <AddIcon sx={{ marginLeft: 1 }} fontSize="small" />
          </SimpleButton>
        ),
      },
    });
  }, [createWorkspace, show, workspaces.length]);

  return (
    <Stack sx={{ width: "100%" }}>
      <Grid container spacing={3} direction="row" sx={{ px: 3, py: 3 }}>
        {workspaces.map((ws) => (
          <MarkdownWorkspaceRender
            key={ws._id}
            workspace={ws}
            onDelete={deleteWorkspace}
          />
        ))}
      </Grid>
    </Stack>
  );
};
