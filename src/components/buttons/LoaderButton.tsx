import { ButtonBase, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onClick?: () => Promise<any>;
  label?: string;
  backgroundColor?: string;
  delay?: number;
  loading?: boolean;
}

export const LoaderButton = ({
  onClick = () => Promise.resolve(undefined),
  label = "Button",
  backgroundColor = "#4692f9",
  delay = 500,
  loading,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <motion.div
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 10,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <ButtonBase
        onClick={() => {
          if (!isLoading && !loading) {
            setIsLoading(true);
            setTimeout(
              () => onClick().finally(() => setIsLoading(false)),
              delay
            );
          }
        }}
        style={{
          padding: 13,
          color: "white",
          height: 50,
          width: "100%",
        }}
      >
        {loading || isLoading ? (
          <CircularProgress style={{ color: "white" }} size={25} />
        ) : (
          <Typography sx={{ color: "white" }}>{label}</Typography>
        )}
      </ButtonBase>
    </motion.div>
  );
};
