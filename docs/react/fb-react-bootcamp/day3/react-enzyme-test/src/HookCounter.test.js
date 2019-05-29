import React from "react";
import { mount } from "enzyme"; // Hooks 사용시 mount O, shallow X
import HookCounter from "./HookCounter";

describe("<HookCounter />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
