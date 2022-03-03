import React, { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export const PageContainer = ({ children }: Props) => {
  return <div>{children}</div>;
};
