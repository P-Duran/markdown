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
import { useNavigate } from "react-router-dom";
import { Paths } from "src/pages/paths";

export const MarkdownWorkspace = (props: any) => {
  const navigate = useNavigate();

  return (
    <Grid item sx={{ height: 300, width: 350 }}>
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          navigate(Paths.EDITOR);
        }}
        style={{
          border: "2px #f0f0f3 solid",
          backgroundColor: "#fefefe",
          height: "100%",
          borderRadius: 8,
          cursor: "pointer",
          scale: 0,
        }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
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
            <Box
              style={{
                height: "100%",
                position: "relative",
                top: "-70%",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              <Container
                sx={{
                  height: "300%",
                  transform: "scale(0.5)",
                  backgroundColor: "white",
                  p: 5,
                  borderRadius: 3,
                }}
              >
                <MarkdownRender
                  value={props.markdownValue.slice(0, 200)}
                  preview={true}
                />
              </Container>
            </Box>
          </Box>
          <Container
            sx={{ height: 120, py: 2, borderBottom: "2px #f0f0f3 solid" }}
          >
            <Typography fontWeight="bold">{"Markdown "}</Typography>
            <Typography variant="subtitle2">Un markdown mazo chulo</Typography>
          </Container>
          <Container sx={{ height: 80, py: 1 }}>
            <Stack spacing={1} direction="row">
              <Typography variant="caption" fontWeight="bold">
                Edited:
              </Typography>
              <Typography variant="caption">
                {new Date().toLocaleString()}
              </Typography>
            </Stack>
          </Container>
        </Stack>
      </motion.div>
    </Grid>
  );
};
