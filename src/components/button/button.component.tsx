import React from "react";
import SButton from "./styled/button.styled";
import { Theme } from "../../theme";

const CButton = ({ children, handleFn }) => {
  const hola = "xd"
  return (
    <SButton theme={Theme} data-testid="button" onClick={() => handleFn()}>
      {children}
    </SButton>
  );
};

export default CButton;
