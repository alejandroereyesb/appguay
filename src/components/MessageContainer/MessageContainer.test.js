import React from "react";
import { render, screen } from '@testing-library/react'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import MessageContainer from "./MessageContainer";

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe("MessageContainer", () => {
  test("matches snapshot", () => {
    render(<MessageContainer />, { wrapper: Wrapper });
    expect(screen).toMatchSnapshot();
  });
});
