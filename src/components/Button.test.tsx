import Button from "./Button";
import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Test Button component", () => {
  test("should render Button with text 'Test'", () => {
    render(<Button btnText="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("should click the Button component", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} btnText="test" />);
    fireEvent.click(screen.getByText("test"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should render link component on type 'link'", () => {
    render(
      <Button
        btnText="Test Link"
        btnType="link"
        href="www.marceloesparza.com"
      />
    );
    const element = screen.queryByText("Test Link");
    expect(element?.tagName).toBe("A");
    expect(element).toHaveAttribute("href", "www.marceloesparza.com");
  });
});
