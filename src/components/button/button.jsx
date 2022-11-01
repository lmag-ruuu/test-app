import React from "react";
import { SButton } from "./button.styled";

const CButton = ({ children, handleFn }) => {
  return (
    <button
      className="primary-btn"
      data-testid="button"
      onClick={() => handleFn()}
    >
      {children}
    </button>
  );
};

export default CButton;
