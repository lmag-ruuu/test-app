import React from "react";
import Anchor from "./anchor.component";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";

describe("anchor component", () => {
  const anchorTestId = "anchor";
  const HREF = "https://www.google.com/";
  let idtext: HTMLAnchorElement;

  beforeEach(() => {
    render(
      <Anchor href={HREF} target="_blank">
        Go to google
      </Anchor>
    );
    idtext = screen.getByTestId(anchorTestId);
  });

  test("should be able to render a anchor", () => {
    expect(idtext).toBeInTheDocument();
  });

  test("should be a valid (external) url in anchor component", () => {
    console.log(idtext.href);
    expect(idtext.href).toContain(HREF);
  });
});
