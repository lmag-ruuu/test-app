import React from "react";

const Anchor = (props) => {
  return (
    <a
      className="primary-anchor"
      data-testid="anchor"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  );
};

export default Anchor;
