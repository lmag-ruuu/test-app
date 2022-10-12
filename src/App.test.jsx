import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App";

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
