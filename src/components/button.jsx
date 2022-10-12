import React from "react";

export default function Button({ children, handleFn }) {
  return (
    <button
      style={{
        width: "100%",
        maxWidth: "380px",
        height: "40px",
        backgroundColor: "#B6E06B",
        color: "rgb(34, 34, 34)",
      }}
      data-testid="button"
      onClick={() => handleFn()}
    >
      {children}
    </button>
  );
}
