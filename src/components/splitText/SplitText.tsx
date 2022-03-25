import React, { ReactElement, useMemo } from "react";
import { motion } from "framer-motion";

type Props = {
  children: string;
};

export const SplitText = ({ children }: Props): ReactElement => {
  const words = useMemo(() => children.split(" "), [children]);

  return (
    <>
      {words.map((word, i) => (
        <div key={children + i} style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "100%" }}
            animate="visible"
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.3,
                },
              }),
            }}
            style={{ willChange: "transform" }}
            custom={i}
          >
            {word + (i !== words.length - 1 ? "\u00A0" : "")}
          </motion.div>
        </div>
      ))}
    </>
  );
};
