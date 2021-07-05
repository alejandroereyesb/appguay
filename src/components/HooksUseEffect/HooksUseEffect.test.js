import React from "react";
import { shallow } from "enzyme";
import HooksUseEffect from "./HooksUseEffect";

describe("HooksUseEffect", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HooksUseEffect />);
    expect(wrapper).toMatchSnapshot();
  });
});
