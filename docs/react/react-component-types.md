2019년 5월 8일 수요일

# React Component Types

- React `createClass` Components

  - React Mixins

- React Class Components

  - React Higher-Order Components
  - React Render Prop Components

- React Function Components

- React Hooks

## 1. React `createClass` Components

자바스크립트 ES6 이전에는 클래스 문법이 존재하지 않았기 때문에 `createClass` 메서드를 통해 리액트 클래스 컴포넌트를 만들 수 있었다.

```js
var App = React.createClss({
  getInitialState: function() {
    return {
      value: ""
    };
  },

  onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    return (
      <div>
        <h1>Hello React "createClass" Component!</h1>

        <input value={this.state.value} type="text" onChange={this.onChange} />

        <p>{this.state.value}</p>
      </div>
    );
  }
});
```

`createClass()` 문법은 리액트 컴포넌트의 메서드를 정의하는 객체를 인자로 받는다.`getInitialState()`는 리액트 컴포넌트의 초기 상태를 설정하는 메서드이며 `render()` 메서드는 JSX를 이용해 결과물을 화면에 보여주기 위해 반드시 사용해야 한다. 그 외 다른 메서드들은 객체에 추가적인 기능을 부여하기 위해 작성했다.

사이드 이펙트를 위한 라이프사이클 메서드들도 사용할 수 있다. 예를 들어, 브라우저의 로컬 스토리지에 인풋 필드의 값을 매번 저장하기 위해서는, `componentDidUpdate()` 메서드를 사용할 수 있다. 이 메서드 안에서 로컬 스토리지의 값을 설정하면 된다.

## 2. React Class Components

리액트 클래스 컴포넌트는 ES6에서 클래스 문법이 생긴 뒤에 도입되었다.

```js
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Hello React ES6 Class Component!</h1>

        <input value={this.state.value} type="text" onChange={this.onChange} />

        <p>{this.state.value}</p>
      </div>
    );
  }
}
```

### 대안적 문법

```js
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Hello React ES6 Class Component!</h1>

        <input value={this.state.value} type="text" onChange={this.onChange} />

        <p>{this.state.value}</p>
      </div>
    );
  }
}
```

## 3. React Function Components

## 4. React Hooks

출처 : https://www.robinwieruch.de/react-component-types/
