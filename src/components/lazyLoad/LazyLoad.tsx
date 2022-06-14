import React, { useState, useEffect, useRef } from "react";

interface Props {
  children: (
    isVisible: boolean,
    placeholderRef: React.RefObject<HTMLDivElement>
  ) => JSX.Element;
}
export const LazyLoad = ({ children }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const placeholderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!visible && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setVisible(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [visible, placeholderRef]);

  return children(visible, placeholderRef);
};
