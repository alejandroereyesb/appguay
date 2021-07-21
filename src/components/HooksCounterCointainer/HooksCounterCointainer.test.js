import React from "react";
import { render, screen } from '@testing-library/react'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import HooksCounterCointainer from "./HooksCounterCointainer";

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe("HooksCounterCointainer", () => {
  test("matches snapshot", () => {
    render(<HooksCounterCointainer />, { wrapper: Wrapper });
    expect(screen).toMatchSnapshot();
  });
});
