import { Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement, useState } from "react";
import { colors } from "src/styles/colorPalette";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

type Page = {
  title: string;
  index: number;
};

type Props = {
  containerRef: React.RefObject<HTMLDivElement>;
  pages: Page[];
};

export const WorkspaceNavigation = ({
  containerRef,
  pages,
}: Props): ReactElement => {
  const [visible, setVisible] = useState(false);

  const getPagesPreview = (pages: Page[]) => (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        justifyContent: "space-between",
        gap: "100px",
        paddingX: "50px",
        paddingY: "20px",
        marginTop: "16px",
        backgroundColor: colors.lightGray,
        overflowX: "auto",
      }}
      role="presentation"
    >
      {pages.map((page) => (
        <Box
          key={page.index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography fontWeight="600" sx={{ color: colors.darkBlue }}>
            {page.title}
          </Typography>
          <Box
            sx={{
              boxShadow: 3,
              height: "140px",
              width: "100px",
              backgroundColor: colors.white,
              borderRadius: "5px",
            }}
          ></Box>
          <Typography
            fontWeight="900"
            sx={{
              color: colors.lightestGray,
              backgroundColor: colors.darkBlue,
              borderRadius: "8px",
              padding: "5px 10px",
            }}
          >
            {page.index}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        position: "absolute",
        top: "16px",
        right: "22px",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.darkGray,
          borderRadius: "0 0 5px 5px",
          paddingX: "10px",
        }}
        onClick={() => setVisible(true)}
      >
        <ExpandMoreRoundedIcon style={{ color: colors.white }} />
      </Box>
      <Drawer
        anchor="top"
        open={visible}
        onClose={() => setVisible(false)}
        PaperProps={{ style: { position: "absolute" } }}
        BackdropProps={{ style: { position: "absolute" } }}
        ModalProps={{
          container: containerRef.current,
          style: { position: "absolute" },
        }}
        variant="temporary"
      >
        {getPagesPreview(pages)}
      </Drawer>
    </Box>
  );
};
