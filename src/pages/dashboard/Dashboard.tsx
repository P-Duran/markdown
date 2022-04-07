import { Grid, Stack, ButtonBase, Typography } from "@mui/material";
import { ReactElement } from "react";
import { markdownMock } from "src/mocks/markdownMocks";
import { MarkdownWorkspace } from "src/components/markdownWorkspace/MarkdownWorkspace";
import SortIcon from "@mui/icons-material/Sort";
import TuneIcon from "@mui/icons-material/Tune";

export const Dashboard = (): ReactElement => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          height: 25,
          backgroundColor: "white",
          px: 5,
          py: 2,
          borderBottom: "1px #ebecee solid",
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <ButtonBase
            sx={{
              px: 2,
              py: 1,
              border: "1px solid #ebecee",
              color: "black",
              borderRadius: 2,
            }}
          >
            <TuneIcon fontSize="small" sx={{ pr: 1 }} />
            <Typography variant="subtitle2">Filter</Typography>
          </ButtonBase>
          <Typography variant="subtitle2">
            {markdownMock.length} Codes in total
          </Typography>
        </Stack>
        <Stack spacing={2} direction="row" alignItems="center">
          <ButtonBase
            sx={{
              px: 2,
              py: 1,
              border: "1px solid #ebecee",
              color: "black",
              borderRadius: 2,
            }}
          >
            <SortIcon fontSize="small" sx={{ pr: 1 }} />
            <Typography variant="subtitle2">Sort</Typography>
          </ButtonBase>
        </Stack>
      </Stack>
      <Grid container spacing={3} direction="row" sx={{ px: 3, py: 6 }}>
        {markdownMock.map((markdownValue, index) => (
          <MarkdownWorkspace markdownValue={markdownValue} index={index} />
        ))}
      </Grid>
    </Stack>
  );
};
