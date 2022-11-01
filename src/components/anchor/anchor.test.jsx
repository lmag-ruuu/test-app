import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Anchor from "./anchor.component";

describe("anchor component", () => {
  const anchorTestId = "anchor";
  let idtext;
  const handleClick = vi.fn();

  beforeEach(() => {
    render(
      <Anchor href="www.google.com" target="_blank">
        Go to google
      </Anchor>
    );
    idtext = screen.getByTestId(anchorTestId);
  });

  test("should be able to render a anchor", () => {
    expect(idtext).toBeInTheDocument();
  });
});
