import TuneIcon from "@mui/icons-material/Tune";
import { ButtonBase, Grid, Stack, Typography } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { MenuButton } from "src/components/buttons/MenuButton";
import { MarkdownWorkspace } from "src/components/markdownWorkspace/MarkdownWorkspace";
import { useOptionsBar } from "src/contexts/OptionsBarContext";
import { markdownMock } from "src/mocks/markdownMocks";
import { MenuOption } from "src/types/MenuButtonTypes";

export const Dashboard = (): ReactElement => {
  const { show, close } = useOptionsBar();

  const settingOptions: MenuOption[] = [
    { label: "Name", action: () => undefined },
  ];

  useEffect(() => {
    show({
      children: {
        group1: (
          <Stack spacing={2} direction="row" alignItems="center">
            <MenuButton
              options={settingOptions}
              buttonRender={(handleMenuStateChange) => (
                <ButtonBase
                  sx={{
                    px: 2,
                    py: 1,
                    border: "1px solid #ebecee",
                    color: "black",
                    borderRadius: 2,
                  }}
                  onClick={(e) => handleMenuStateChange(e.currentTarget)}
                >
                  <TuneIcon fontSize="small" sx={{ pr: 1 }} />
                  <Typography variant="subtitle2">Sort</Typography>
                </ButtonBase>
              )}
            />
            <Typography variant="subtitle2">
              {markdownMock.length} Codes in total
            </Typography>
          </Stack>
        ),
      },
    });
  }, []);

  return (
    <Stack sx={{ width: "100%" }}>
      <Grid container spacing={3} direction="row" sx={{ px: 3, py: 3 }}>
        {markdownMock.map((markdownValue, index) => (
          <MarkdownWorkspace markdownValue={markdownValue} index={index} />
        ))}
      </Grid>
    </Stack>
  );
};
