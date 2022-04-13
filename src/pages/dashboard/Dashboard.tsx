import { ButtonBase, Grid, Stack, Typography } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { MarkdownWorkspace } from "src/components/markdownWorkspace/MarkdownWorkspace";
import { useOptionsBar } from "src/contexts/OptionsBarContext";
import { markdownMock } from "src/mocks/markdownMocks";
import SortIcon from "@mui/icons-material/Sort";
import TuneIcon from "@mui/icons-material/Tune";

export const Dashboard = (): ReactElement => {
  const { show, close } = useOptionsBar();
  useEffect(() => {
    show({
      children: [
        <ButtonBase
          sx={{
            px: 2,
            py: 1,
            border: "1px solid #ebecee",
            color: "black",
            borderRadius: 2,
          }}
          onClick={() => close()}
        >
          <TuneIcon fontSize="small" sx={{ pr: 1 }} />
          <Typography variant="subtitle2">Filter</Typography>
        </ButtonBase>,
        <Typography variant="subtitle2">{5} Codes in total</Typography>,
      ],
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
