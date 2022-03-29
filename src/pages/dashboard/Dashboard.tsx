import { Grid, Box } from "@mui/material";
import { ReactElement } from "react";
import { markdownMock } from "src/mocks/markdownMocks";
import { AlternativePreview } from "src/components/markdownPreview/AlternativePreview";

export const Dashboard = (): ReactElement => {
  return (
    <Box>
      <Grid container spacing={3} direction="row">
        {markdownMock.map((markdownValue, index) => (
          <AlternativePreview markdownValue={markdownValue} index={index} />
        ))}
      </Grid>
    </Box>
  );
};
