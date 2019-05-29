import React from "react";
import { render, fireEvent } from "react-testing-library";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  // 반복되는 코드 함수화
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력하세요.");
    const button = getByText("등록");
    return {
      ...utils,
      input,
      button
    };
  };
  // UI
  it("has input and a button", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  // input change event
  it("changes input", () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기"
      }
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  // form submit event
  it("calls onInsert and clears input", () => {
    // jest의 mock 함수(가짜 함수)
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });

    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기"
      }
    });

    // 버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", "");
  });
});
