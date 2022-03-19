import { ButtonBase, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  onClick?: () => Promise<any>;
  label?: string;
}

export const LoaderButton = ({
  onClick = () => Promise.resolve(undefined),
  label = "Button",
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ButtonBase
      onClick={() => {
        setIsLoading(true);
        onClick().finally(() => setIsLoading(false));
      }}
      style={{
        padding: 13,
        borderRadius: 10,
        backgroundColor: "#4692f9",
        color: "white",
        height: 50
      }}
    >
      {isLoading ? (
        <CircularProgress style={{ color: "white" }} size={25} />
      ) : (
        <Typography sx={{ color: "white" }}>{label}</Typography>
      )}
    </ButtonBase>
  );
};
