import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AnimatedCounter from "./AnimatedCounter";

describe("real counter values on load", () => {
  it("shows the supplied project count immediately without scrolling", () => {
    render(<AnimatedCounter target={150} suffix="+" />);
    expect(screen.getByText("150+")).toBeInTheDocument();
  });
  it("preserves supplied decimal percentages instead of rounding claims", () => {
    render(<AnimatedCounter target={14.5} suffix="%" />);
    expect(screen.getByText("14.5%")).toBeInTheDocument();
  });
});