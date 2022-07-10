import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import { sizes, stickyPosition, variants } from "../../theme";

it.todo("should render a button with the class of primary");

it("should render a button with default parameters", () => {
  render(<Button />);

  const primaryButton = screen.getByRole("button", { name: /Test Button/i });

  expect(primaryButton).toHaveStyle({
    ...variants["primary"],
    ...sizes["medium"],
    cursor: "pointer",
  });
});

it("should render a button with passing parameters", () => {
  const fn = jest.fn();

  render(
    <Button onClick={fn} text="My Button!" size="large" variant="error" />
  );

  const primaryButton = screen.getByRole("button", { name: /My Button!/i });

  expect(primaryButton).toHaveStyle({
    ...variants["error"],
    ...sizes["large"],
  });

  fireEvent.click(primaryButton);
  expect(fn).toHaveBeenCalledTimes(1);
});
