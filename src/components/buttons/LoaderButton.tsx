import { CircularProgress, Typography } from "@mui/material";
import { MotionStyle } from "framer-motion";
import { useState } from "react";
import { ButtonVariant } from "src/types/ButtonTypes";
import { BasicButton } from "./BasicButton";

interface Props {
  onClick?: () => Promise<void>;
  variant?: ButtonVariant;
  delay?: number;
  loading?: boolean;
  style?: MotionStyle;
  children?: React.ReactNode;
}

export const LoaderButton = ({
  onClick = () => Promise.resolve(undefined),
  variant = "primary",
  delay = 250,
  loading,
  style = {},
  children = <Typography>{"Button"}</Typography>,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BasicButton
      variant={variant}
      style={style}
      onClick={() => {
        if (!isLoading && !loading) {
          setIsLoading(true);
          setTimeout(() => onClick().finally(() => setIsLoading(false)), delay);
        }
      }}
    >
      {loading || isLoading ? (
        <CircularProgress style={{ color: "white" }} size={25} />
      ) : (
        children
      )}
    </BasicButton>
  );
};
