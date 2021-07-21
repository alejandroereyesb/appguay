import React from "react";
import { render, screen } from '@testing-library/react'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import PruebaRedux from "./PruebaRedux";

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe("PruebaRedux", () => {
  test("matches snapshot", () => {
    render(<PruebaRedux />, { wrapper: Wrapper });
    expect(screen).toMatchSnapshot();
  });
});
