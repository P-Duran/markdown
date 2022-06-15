import React from "react";

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const ImageComponent = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        {...props}
        alt=""
        style={{
          maxWidth: "100%",
          //boxShadow: "0 5px 28px rgba(0, 0, 0, 0.3)",
          borderRadius: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
    </div>
  );
};
