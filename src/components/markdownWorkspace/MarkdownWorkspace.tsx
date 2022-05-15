import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PreviewIcon from "@mui/icons-material/Preview";
import {
  alpha,
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MarkdownRender } from "src/components/render/MarkdownRender";
import { Paths } from "src/pages/paths";
import { MarkdownWorkspace } from "src/types/MarkdownWorkspaceTypes";

interface Props {
  workspace: MarkdownWorkspace;
  onDelete: (id: string) => void;
}

export const MarkdownWorkspaceRender = ({ workspace, onDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <Grid item sx={{ height: 300, width: 350 }}>
      <motion.div
        onClick={() =>
          navigate({
            pathname: Paths.EDITOR,
            search: "?workspace=" + workspace._id,
          })
        }
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
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <PreviewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onDelete(workspace._id);
              }}
            >
              <DeleteOutlineIcon fontSize="small" />
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
                left: "-13%",
                pointerEvents: "none",
                userSelect: "none",
                width: 400,
              }}
            >
              <Container
                sx={{
                  height: "250%",
                  transform: "scale(0.4)",
                  backgroundColor: "white",
                  p: 5,
                  borderRadius: 3,
                }}
              >
                <MarkdownRender
                  value={workspace.preview.slice(0, 200)}
                  preview={true}
                />
              </Container>
            </Box>
          </Box>
          <Container
            sx={{ height: 120, py: 2, borderBottom: "2px #f0f0f3 solid" }}
          >
            <Stack spacing={1}>
              <Typography fontWeight="bold">{workspace.name}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Avatar
                  sx={{
                    backgroundColor: alpha("#1976d2", 0.2),
                    height: 15,
                    width: 15,
                    p: 0.5,
                  }}
                >
                  <InsertDriveFileIcon color="primary" sx={{ fontSize: 15 }} />
                </Avatar>
                <Typography variant="caption">
                  {workspace.pages} Pages
                </Typography>
              </Stack>
            </Stack>
          </Container>
          <Container sx={{ height: 80, py: 1 }}>
            <Stack spacing={1} direction="row">
              <Typography variant="caption" fontWeight="bold">
                Edited:
              </Typography>
              <Typography variant="caption">{workspace.updatedAt}</Typography>
            </Stack>
          </Container>
        </Stack>
      </motion.div>
    </Grid>
  );
};
