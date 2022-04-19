import { ButtonBase, SxProps, Theme } from "@mui/material";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const SimpleButton = ({ onClick, children, sx = {} }: Props) => {
  return (
    <ButtonBase
      sx={{
        px: 2,
        py: 1,
        border: "1px solid #ebecee",
        color: "black",
        borderRadius: 2,
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
};
