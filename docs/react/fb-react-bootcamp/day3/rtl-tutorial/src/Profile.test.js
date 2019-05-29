import React from "react";
import { render } from "react-testing-library";
import Profile from "./Profile";

describe("<Profile />", () => {
  // snapshot - 반드시 할 필요는 X
  it("matches snapshot", () => {
    const utils = render(<Profile username="velopert" name="김민준" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="velopert" name="김민준" />);
    utils.getByText("velopert"); // velopert라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(김민준)"); // (김민준)이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/김/); // 정규식 /김/을 만족하는 엘리먼트가 있는지 확인
  });
});
