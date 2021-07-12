import React from "react";
import { shallow } from "enzyme";
import PruebaRedux from "./PruebaRedux";

describe("PruebaRedux", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PruebaRedux />);
    expect(wrapper).toMatchSnapshot();
  });
});
