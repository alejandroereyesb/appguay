import React from "react";
import { render, screen } from '@testing-library/react'
import HooksUseEffect from "./HooksUseEffect";

describe("HooksUseEffect", () => {
  test("matches snapshot", () => {
    render(<HooksUseEffect />);
    expect(screen).toMatchSnapshot();
  });
});
