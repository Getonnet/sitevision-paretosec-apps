import * as React from "react";
import { screen } from "@testing-library/react";

test("renders correct message and name", () => {
  const element = screen.getByText(/hello, world/i);
  expect(element).toBeInTheDocument();
});
