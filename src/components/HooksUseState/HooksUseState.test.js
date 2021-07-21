import React from "react";
import { render, screen } from '@testing-library/react'
import HooksUseState from "./HooksUseState";

describe("HooksUseState", () => {
  test("matches snapshot", () => {
    render(<HooksUseState />);
    expect(screen).toMatchSnapshot();
  });
});
