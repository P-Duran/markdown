import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  Divider,
  IconButton,
} from "@mui/material";
import { MarkdownRender } from "src/components/render/MarkdownRender";
import { motion } from "framer-motion";
import ClearIcon from "@mui/icons-material/Clear";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const AlternativePreview = (props: any) => {
  return (
    <Grid item sx={{ height: 300, width: 350 }}>
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          console.log("hi");
        }}
        style={{
          border: "2px #f0f0f3 solid",
          backgroundColor: "#fefefe",
          height: "100%",
          borderRadius: 8,
          cursor: "pointer",
        }}
        whileHover={{
          border: "2px #82b7ff solid",
          boxShadow: "0px 5px 35px 0px rgba(0,0,0,0.0.5)",
        }}
      >
        <Stack alignItems="stretch" sx={{ height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ px: 1, height: 80, borderBottom: "2px #f0f0f3 solid" }}
          >
            <IconButton>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <ClearIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Box
            sx={{
              height: "100%",
              overflow: "hidden",
              backgroundColor: "#f0f0f3",
              //Spagetti code que solo esta aqui por dar un poco de variedad
              backgroundPosition:
                Math.floor(Math.random() * 100) +
                "% " +
                Math.floor(Math.random() * 100) +
                "% ",
              backgroundImage:
                "url(https://miro.medium.com/max/1400/1*5XH40dQSsBVFtvx3MO5VwQ.png)",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                scale: 0.5,
                height: 100,
                // backgroundColor: "blue",
                position: "relative",
                top: "-40%",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              <Container sx={{ backgroundColor: "white" }}>
                <MarkdownRender value={props.markdownValue} />
              </Container>
            </motion.div>
          </Box>
          <Container
            sx={{ height: 120, pt: 2, borderBottom: "2px #f0f0f3 solid" }}
          >
            <Typography fontWeight="bold">{"Markdown "}</Typography>
            <Typography variant="subtitle2">Un markdown mazo chulo</Typography>
          </Container>
          <Box sx={{ height: 80 }} />
        </Stack>
      </motion.div>
    </Grid>
  );
};
