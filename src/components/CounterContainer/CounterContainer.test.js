import React from "react";
import { render, screen } from '@testing-library/react'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import CounterContainer from "./CounterContainer";

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe("CounterContainer", () => {
  test("matches snapshot", () => {
    render(<CounterContainer />, { wrapper: Wrapper });
    expect(screen).toMatchSnapshot();
  });
});
