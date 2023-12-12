import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correct message and name", () => {
  render(<App norwaySiteLink={"#"} swedenSiteLink={"#"} />);
  const element = screen.getByText(/Norsk/i);
  const element2 = screen.getByText(/Svensk/i);
  expect(element).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
});
