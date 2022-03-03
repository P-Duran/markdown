import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = (): ReactElement => {
  const navigate = useNavigate();

  const onEditorNavigate = () => {
    navigate("/editor");
  };

  return (
    <div>
      Home Page
      <button onClick={onEditorNavigate}>Editor</button>
    </div>
  );
};
