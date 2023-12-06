import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correct message and name", () => {
  render(<App formType="active" redirectPageUrl={"#"} />);
  const element = screen.getByText(/hello, world/i);
  expect(element).toBeInTheDocument();
});
