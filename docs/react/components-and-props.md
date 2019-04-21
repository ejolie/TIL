2019년 4월 12일 금요일

# 컴포넌트와 Props

컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나눌 수 있습니다.

개념적으로 컴포넌트는 자바스크립트 함수와 유사합니다. "props"라고 하는 임의의 입력을 받은 뒤, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환합니다.

## 함수 컴포넌트와 클래스 컴포넌트

컴포넌트를 정의하는 가장 간단한 방법 : 자바스크립트 함수 작성

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

이 함수는 데이터를 가진 하나의 "props"(속성을 나타내는 데이터) 객체 인자를 받은 후 React 엘리먼트를 반환합니다. 이러한 컴포넌트는 자바스크립트 함수이기 때문에 말 그대로 **"함수 컴포넌트"**라고 호칭합니다.

또한, *ES6 클래스*를 사용하여 컴포넌트를 정의할 수 있습니다.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

클래스는 몇 가지 추가 기능이 존재합니다.


## 컴포넌트 렌더링

이전까지는 React 엘리먼트를 *DOM 태그*로 나타냈으나, *사용자 정의 컴포넌트*로도 나타낼 수 있습니다.

```jsx
const element = <div />;
const element2 = <Welcom name="Sara" />;
```

React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 속성을 해당 컴포넌트에 단일 객체로 전달합니다. 이 객체를 "props"라고 합니다.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

> **주의**
>
> 컴포넌트 이름은 항상 대문자로 시작합니다.

## 컴포넌트 합성

컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있습니다. React 앱에서는 모든 것이 흔히 컴포넌트로 표현됩니다.

예를 들어 `Welcome` 컴포넌트를 여러 번 렌더링하는 `App` 컴포넌트를 만들 수 있습니다.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

## 컴포넌트 추출

컴포넌트를 여러 개의 작은 컴포넌트로 나눌 수 있습니다. UI 일부가 여러 번 사용되거나, UI 일부가 자체적으로 복잡한 경우에 재사용 가능한 컴포넌트로 만드는 것이 좋습니다.


## props는 읽기 전용

함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서는 안 됩니다.

### 순수 함수
```javascript
function sum(a, b) {
  return a + b;
}

```

입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하는 *순수 함수*

**모든 React 컴포넌트는 자신의 props를 다줄 때 반드시 순수 함수처럼 동작해야 합니다.**

React 컴포넌트는 state를 통해 위 규칙을 위반하지 않고 사용자 액션, 네트워크 응답 및 다른 요소에 대한 응답으로 시간에 따라 자신의 출력값을 변경할 수 있습니다.

출처 : https://reactjs-kr.firebaseapp.com/docs/components-and-props.html