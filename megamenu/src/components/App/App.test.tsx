import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correct message and name", () => {
  render(<App name="World" />);
  const element = screen.getByText(/world/i);
  expect(element).toBeInTheDocument();
});
