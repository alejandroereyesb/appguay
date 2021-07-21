import React from "react";
import { render, screen } from '@testing-library/react'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import UserContainer from "./UserContainer";

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe("UserContainer", () => {
  test("matches snapshot", () => {
    render(<UserContainer />, { wrapper: Wrapper });
    expect(screen).toMatchSnapshot();
  });
});
