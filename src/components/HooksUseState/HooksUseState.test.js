import React from "react";
import { shallow } from "enzyme";
import HooksUseState from "./HooksUseState";

describe("HooksUseState", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HooksUseState />);
    expect(wrapper).toMatchSnapshot();
  });
});
