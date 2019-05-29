import React from "react";
import { shallow } from "enzyme"; // 외부 컴포넌트 렌더링 X
import Counter from "./Counter";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
  it("has initial number", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0);
  });
  // method
  it("increases", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });
  it("decreases", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });
  // DOM event
  it("calls handleIncrease", () => {
    // 클릭 이벤트를 simulate하고, state를 확인한다.
    const wrapper = shallow(<Counter />);
    const plusButton = wrapper.findWhere(
      // 특정 조건을 가진 해당 DOM 엘리먼트를 찾는다.
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    expect(wrapper.state().number).toBe(1);
  });
  it("calls handleDecrease", () => {
    // 클릭 이벤트를 simulate하고, h2 태그의 텍스트를 확인한다.
    const wrapper = shallow(<Counter />);
    const minusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );
    minusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("-1");
  });
});
