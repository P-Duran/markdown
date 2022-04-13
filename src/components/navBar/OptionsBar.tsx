import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { OptionsBarProps } from "src/contexts/OptionsBarContext";

interface Props extends OptionsBarProps {
  visible?: boolean;
}

export const OptionsBar = ({ children, visible }: Props) => {
  return (
    <motion.div
      animate={{
        height: visible ? 40 : 0,
        paddingTop: visible ? 10 : 0,
        paddingBottom: visible ? 10 : 0,
      }}
      style={{
        height: 0,
        borderTop: "1px #ebecee solid",
        backgroundColor: "white",
        borderBottom: "1px #ebecee solid",
        overflowY: "hidden",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing={2} direction="row" alignItems="center">
          {children}
        </Stack>
      </Stack>
    </motion.div>
  );
};
