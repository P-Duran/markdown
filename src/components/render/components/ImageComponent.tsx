import React from "react";

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const ImageComponent = (props: Props) => {
  console.log(props);
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
        style={{
          maxWidth: "100%",
          boxShadow: "0 5px 28px rgba(0, 0, 0, 0.4)",
          borderRadius: 10,
          marginTop: 40,
          marginBottom: 40,
        }}
      />
    </div>
  );
};
