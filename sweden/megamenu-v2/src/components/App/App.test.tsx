import * as React from "react";
import { screen } from "@testing-library/react";
// import App from "./App";

test("renders correct message and name", () => {
  // render(<App data={{
  //
  // }} />);
  const element = screen.getByText(/hello, world/i);
  expect(element).toBeInTheDocument();
});
