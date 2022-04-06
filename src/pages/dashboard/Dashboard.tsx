import { Grid, Box } from "@mui/material";
import { ReactElement } from "react";
import { markdownMock } from "src/mocks/markdownMocks";
import { MarkdownWorkspace } from "src/components/markdownWorkspace/MarkdownWorkspace";

export const Dashboard = (): ReactElement => {
  return (
    <Box>
      <Grid container spacing={3} direction="row" sx={{ padding: 3 }}>
        {markdownMock.map((markdownValue, index) => (
          <MarkdownWorkspace markdownValue={markdownValue} index={index} />
        ))}
      </Grid>
    </Box>
  );
};
