import { useTheme } from "@mui/material";
import { ButtonVariant } from "src/types/ButtonTypes";

export const useButtonVariantStyle = (variant: ButtonVariant) => {
  const theme = useTheme();

  const buildStyle = (style: React.CSSProperties): React.CSSProperties => {
    return { borderRadius: 10, height: 50, ...style };
  };
  const stylesByVariant: Record<ButtonVariant, React.CSSProperties> = {
    primary: { backgroundColor: theme.palette.primary.main, color: "white" },
    secondary: { backgroundColor: theme.palette.secondary.main, color: "white" },
    destructive: { backgroundColor: theme.palette.error.main, color: "white" },
    border: { border: "2px solid", borderColor: theme.palette.grey[300], color: "black" },
  };

  return buildStyle(stylesByVariant[variant]);
};
