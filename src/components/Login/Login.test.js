import React from "react";
import { render, screen } from '@testing-library/react'
import Login from "./Login";

describe("Login", () => {
  test("matches snapshot", () => {
    render(<Login />);
    expect(screen).toMatchSnapshot();
  });
});
