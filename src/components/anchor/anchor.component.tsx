import React from "react";
import SAnchor from "./styled/anchor.styled";
import { Theme } from "../../theme";

const Anchor = (props) => {
  return (
    <SAnchor
      theme={Theme}
      data-testid="anchor"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </SAnchor>
  );
};

export default Anchor;
