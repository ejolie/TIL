2019년 4월 12일 금요일

# State와 라이프사이클

State는 props와 비슷하지만 컴포넌트에 의해 완전히 제어되며 private 속성입니다.

이전에 언급했던 대로 클래스로 정의한 컴포넌트에는 몇 가지 추가 기능이 있습니다. 로컬 state나 라이프사이클 훅 같은 추가 기능은 클래스 컴포넌트에서만 사용 가능합니다.

## 함수를 클래스로 변환

```jsx
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

`Clock` 같은 함수형 컴포넌트를 클래스로 변환하려면

1. 같은 이름의 ES6 클래스를 만들고 `React.Component`를 `extends`합니다.

2. 비어있는 `render()` 메서드를 추가합니다.

3. 함수의 바디를 `render()` 메서드 안으로 옮깁니다.

4. `render()` 바디 내에서 `props`를 `this.props`로 바꿉니다.

5. 남아있는 빈 함수 선언문을 제거합니다.

```jsx
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## 클래스에 로컬 state 추가하기

클래스 컴포넌트는 항상 `props`와 함께 기본 생성자를 호출합니다.

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

## 클래스에 라이프사이클 메서드 추가하기

컴포넌트가 제거될 때 리소스를 풀어주는 것 중요

- mounting: `Clock`이 DOM에 최초로 렌더링 될 때 타이머를 설정
- unmounting: `Clock`을 DOM에서 삭제했을 때 타이머를 해제

컴포넌트가 마운트 (mount) 되고 언마운트 (unmount) 될 때 특정 코드를 실행하기 위해 컴포넌트 클래스에 특별한 메서드를 선언할 수 있습니다. 이런 메서드들을 "라이프사이클 훅"이라고 부릅니다.

`componentDidMount()` 훅은 컴포넌트 출력이 DOM에 렌더링 된 이후 동작합니다.

```jsx
componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}
```

`this` 에 `timer ID`를 어떻게 저장하는 지 살펴봅시다.
만약 `render()` 내에서 사용하지 않는다면, `state`가 되어서는 안됩니다.

```jsx
componentWillUnmount() {
  clearInterval(this.timerID);
}
```

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```


## State 바르게 사용하기

`setState()`에 대해 알아야 할 세 가지

### 1. State를 직접 수정하지 마세요

대신, `setState()`를 사용하세요.

`this.state`를 지정할 수 있는 유일한 곳은 생성자 함수(`constructor()`) 내부입니다.

```jsx
// Wrong
this.state.comment = 'hello';

// Correct
this.setState({
  comment: 'hello'
});
```

### 2. State 업데이트는 비동기일 수 있습니다.

React는 여러 `setState()` 호출이 들어오면 성능을 위해 단일 업데이트로 배치할 수 있습니다.

`this.props` 및 `this.state`가 비동기로 업데이트 될 수 있으므로 `state`의 값을 신뢰해선 안됩니다.

카운터를 업데이트하는 이 예시 코드는 예상대로 작동하지 않을 수 있습니다.

```jsx
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment
});
```

이 문제를 해결하기 위해 객체가 아니라 함수를 받는 두 번째 형식의 `setState()`를 사용할 수 있습니다. 이 함수의 첫 번째 인수는 이전 state이고, 두 번째 인수는 업데이트가 적용될 때의 props입니다.

```jsx
// Correct - 1. arrow function
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

// Correct - 2. regular function
this.setState(function(prevState, props) {
  return (
    counter: prevState.counter + props.increment
  );
});
```

### 3. State 업데이트는 병합됩니다.

`setState()`를 호출할 때, React는 현재 state와 제공한 객체를 병합합니다.

예를 들어, state는 독립적인 여러 변수를 가질 수 있습니다.

```jsx
constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: [],
  };
}
```

개별적으로 `setState()`를 호출하여 아이템을 각각 업데이트 할 수 있습니다.

```jsx
componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}
```

## 데이터는 아래로 흐릅니다.

React 컴포넌트는 다른 컴포넌트의 state나 해당 컴포넌트가 함수와 클래스 중 어떤 것으로 선언되었는지 알 수 없습니다.

컴포넌트 자신 외에는 state에 접근할 수 없습니다. 컴포넌트는 이러한 자신의 state를 자식 컴포넌트에 props로 내려줄 수 있습니다.

이런 데이터 흐름을 보통 "하향식(top-down)" 혹은 "단방향(unidirectional)" 데이터 흐름이라고 합니다.

모든 state는 항상 특정 컴포넌트가 가지며, 해당 state에서 파생된 모든 데이터 또는 UI는 트리의 컴포넌트 “아래(below)“에만 영향을 미칩니다.

컴포넌트 트리 = `props`의 폭포

출처 : https://reactjs-kr.firebaseapp.com/docs/state-and-lifecycle.html
