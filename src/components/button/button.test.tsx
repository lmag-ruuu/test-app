import React from "react";
import CButton from "./button.component";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

describe("button component", () => {
  const buttonTestId = "button";
  let idtext: HTMLButtonElement;
  const handleClick = vi.fn();

  beforeEach(() => {
    render(<CButton handleFn={handleClick}>Hey, click on me</CButton>);
    idtext = screen.getByTestId(buttonTestId);
  });

  test("should be able to render the buttom", () => {
    // assert
    expect(idtext).not.toBeUndefined();
  });
  test("should be able to render based on the children prop", () => {
    //assert
    expect(idtext).toHaveTextContent(/Hey, click on me/);
  });

  test("should be able to fire event when user clicked", () => {
    fireEvent.click(screen.getByTestId(buttonTestId));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
