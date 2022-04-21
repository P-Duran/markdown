import { ButtonBase } from "@mui/material";
import { motion, MotionStyle } from "framer-motion";
import { useButtonVariantStyle } from "src/hooks/useButtonVariantStyle";
import { ButtonVariant } from "src/types/ButtonTypes";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  style?: MotionStyle;
}

export const BasicButton = ({
  onClick,
  children,
  variant = "primary",
  style = {},
}: Props) => {
  const variantStyle = useButtonVariantStyle(variant);
  console.log(variantStyle, variant);
  return (
    <motion.div
      style={{
        ...variantStyle,
        ...style,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <ButtonBase
        onClick={onClick}
        style={{
          padding: 13,
          height: "100%",
          width: "100%",
        }}
      >
        {children}
      </ButtonBase>
    </motion.div>
  );
};
