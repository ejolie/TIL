2019년 4월 29일 월요일

# 양방향 데이터 바인딩

리액트의 **양방향 데이터 바인딩(Two-way data binding)** 이란?

- view에서 변경시킨 값이 state를 업데이트한다. (이벤트 핸들러를 호출한다)
- state 값이 view를 업데이트한다.

```jsx
class UserInput extends React.Component {
  state = {
    name: "reactgo"
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input
          type="text"
          onChange={this.handleChange} // 이벤트 핸들러
          value={this.state.name} // state 값과 묶인 view 데이터 값
        />
      </div>
    );
  }
}
```

이 예시 코드를 보면 유저가 view의 입력 값을 변경할 때마다 `onChange` 이벤트 핸들러를 호출시키고 이것은 `setState()` 메서드를 호출해 `this.state.name` 프로퍼티 값을 업데이트한다. 마침내 `UserInput` 컴포넌트는 업데이트된 값을 갖고 리렌더링된다.

이 예시와 같이 `input` 엘리먼트 값이 리액트에 의해 제어되는 것을 **제어 컴포넌트**라고 부른다.

출처 : https://reactgo.com/two-way-data-binding-react/
