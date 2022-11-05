import React from "react";
import App from "./App";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("render app", () => {
  test("should be able to see the initial text on the screen", () => {
    // arrange
    render(<App />);
    // act
    const textResult = screen.getByText(/Hey, its working/);

    // assert
    expect(textResult).toBeInTheDocument();
  });
});
