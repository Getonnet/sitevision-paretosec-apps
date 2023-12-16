import * as React from "react";
import { screen } from "@testing-library/react";

test("renders correct message and name", () => {
  // render(<App message="Hello," name="World" />);
  const element = screen.getByText(/hello, world/i);
  expect(element).toBeInTheDocument();
});
