import React from "react";
import SButton from "./styled/button.styled";
import { Theme } from "../../theme";

const CButton = ({ children, handleFn }) => {
  return (
    <SButton theme={Theme} data-testid="button" onClick={() => handleFn()}>
      {children}
    </SButton>
  );
};

export default CButton;
