import React from "react";
import { shallow } from "enzyme";
import HooksCounterCointainer from "./HooksCounterCointainer";

describe("HooksCounterCointainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HooksCounterCointainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
