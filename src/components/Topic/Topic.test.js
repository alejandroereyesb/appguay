import React from "react";
import { render, screen } from '@testing-library/react'
import Topic from "./Topic";

describe("Topic", () => {
  test("matches snapshot", () => {
    render(<Topic />);
    expect(screen).toMatchSnapshot();
  });
});
