import "@testing-library/jest-dom";
import Button from "../components/Button";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Test Button component", () => {
  test("should render button with text", () => {
    render(<Button btnText="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument(); // Failing  due to ReferenceError: expect is not defined
  });
});
