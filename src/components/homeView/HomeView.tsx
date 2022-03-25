import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "src/styles/colorPalette";
import { ReactComponent as PagesLogo } from "../../assets/svg/pages.svg";
import { ReactComponent as CreatePages } from "../../assets/svg/createPages.svg";
import { ReactComponent as WebsiteBuilder } from "../../assets/svg/websiteBuilder.svg";
import { motion, useAnimation } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

export const HomeView = () => {
  const [t] = useTranslation();
  const [currentView, setCurrentView] = useState<number>(0);

  const controls = useAnimation();

  useEffect(() => {
    switch (currentView) {
      case 0:
        controls.start(() => ({
          x: [0, 30, 0],
          y: [0, -20, 0],
          transition: { delay: 0.5, duration: 1.5 },
        }));
        break;
      case 1:
        controls.start(() => ({
          rotate: [0, 23, 0],
          transition: { delay: 0.5, duration: 1.5 },
        }));
        break;
      case 2:
        controls.start(() => ({
          y: [0, 20, 0],
          transition: { delay: 0.5, duration: 1.5 },
        }));
        break;
      default:
        break;
    }
  }, [controls, currentView]);

  return (
    <Grid
      item
      sm={7}
      sx={{
        backgroundColor: colors.primary,
        padding: 5,
      }}
    >
      <Typography
        color="white"
        variant="h1"
        sx={{ textAlign: "center", fontWeight: 800 }}
      >
        {t("homeView.title")}
      </Typography>
      <Typography
        color="white"
        variant="h3"
        sx={{ textAlign: "center", paddingTop: 3 }}
      >
        {t("homeView.description")}
      </Typography>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        autoFocus={false}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        useKeyboardArrows={true}
        onChange={(index) => setCurrentView(index)}
      >
        <motion.div animate={controls}>
          <CreatePages width="450px" />
        </motion.div>

        <motion.div animate={controls}>
          <PagesLogo width="450px" />
        </motion.div>

        <motion.div animate={controls}>
          <WebsiteBuilder width="450px" />
        </motion.div>
      </Carousel>
    </Grid>
  );
};
