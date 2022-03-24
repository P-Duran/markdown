import { Grid, Box } from "@mui/material";
import { ReactElement } from "react";
import { markdownMock } from "src/mocks/markdownMocks";
import { AlternativePreview } from "src/components/markdownPreview/AlternativePreview";

export const Dashboard = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "calc(100vh - 66px)",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Grid
        container
        spacing={3}
        direction="row"
        sx={{
          padding: "20px",
        }}
      >
        {markdownMock.map((markdownValue, index) => (
          <AlternativePreview markdownValue={markdownValue} />
          // <MarkdownPreview
          //   key={index}
          //   title={"Título de la página"}
          //   markdown={markdownValue}
          //   onEditClick={() => null}
          //   onViewClick={() => null}
          // />
        ))}
      </Grid>
    </Box>
  );
};
