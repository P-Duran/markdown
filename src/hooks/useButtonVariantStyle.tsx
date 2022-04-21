import { useTheme } from "@mui/material";
import { ButtonVariant } from "src/types/ButtonTypes";

export const useButtonVariantStyle = (variant: ButtonVariant) => {
  const theme = useTheme();

  const buildStyle = (style: React.CSSProperties): React.CSSProperties => {
    return { borderRadius: 10, height: 50, ...style };
  };
  const stylesByVariant: Record<ButtonVariant, React.CSSProperties> = {
    primary: { backgroundColor: theme.palette.primary.main },
    secondary: { backgroundColor: theme.palette.secondary.main },
    destructive: { backgroundColor: theme.palette.error.main },
    border: { border: "1px solid", borderColor: theme.palette.grey[200] },
  };

  return buildStyle(stylesByVariant[variant]);
};
