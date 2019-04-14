2019년 4월 12일 금요일

# 이벤트 처리하기 {docsify-ignore-all}

React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사합니다. 몇 가지 문법적인 차이는 다음과 같습니다.

* React의 이벤트는 소문자 대신 **camelCase**를 사용합니다.

* JSX를 사용해 (문자열인 아니라) **함수**로 이벤트 핸들러를 전달합니다.

1. HMTL

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

2. React

```jsx
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

또 다른 차이점

* React에서는 `false`를 반환해도 기본 동작을 방지할 수 없습니다. 반드시 **`preventDefault`**를 명시적으로 호출해야 합니다. 

1. HTML

일반 HTML에서는 새 페이지를 여는 링크의 기본 동작을 방지하기 위해 다음과 같은 코드를 작성합니다.

```html
<a href="#" onclick="console.log('The link was clicked'); return false">
  Click me
</a>
```

2. React

```jsx
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 *`addEventListener`를 호출할 필요가 없습니다.* 대신, **엘리먼트가 처음 렌더링될 때 리스너를 제공하면 됩니다.**

ES6 클래스로 컴포넌트를 정의할 때, 일반적으로 **이벤트 핸들러를 클래스의 메서드로 만듭니다.**

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // 콜백 함수에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)
```

JSX 콜백 안에서 `this`의 의미에 주의해야 합니다. **자바스크립트에서 클래스 메서드는 기본적으로 바인딩되어 있지 않습니다.** 

`this.handleClick`을 바인딩하지 않고 `onClick`에 전달하였다면, 함수가 실제 호출될 때 `this`는 `undefined`가 됩니다.

일반적으로 `onClick={this.handleClick}`과 같이 뒤에 `()`를 사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 합니다.

> **Function.prototype.bind()**
>
> `bind()` 메서드는 `this` 키워드를 주어진 값으로 설정하고, 앞쪽의 매개변수도 자신의 인자를 사용해 미리 순서대로 채워놓은 새로운 함수를 반환합니다.

만약 `bind`를 호출하는 것이 불편하다면, 이를 해결할 수 있는 두 가지 방법이 있습니다. 

1. 클래스 필드 문법

```jsx
class LoggingButton extends React.Component {
  // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
  // 주의: 이 문법은 *실험적인* 문법입니다.
  handleClick = () => {
    console.log('this is:', this)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    )
  }
}
```

2. 콜백에 화살표 함수 사용

```jsx
class LoggingButton extends React.Component {
  // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
  // 주의: 이 문법은 *실험적인* 문법입니다.
  handleClick() {
    console.log('this is:', this)
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    )
  }
}
```

그런데 이 문법의 문제점은 `LoggingButton`이 렌더링될 때마다 다른 콜백이 생성된다는 것입니다. 대부분의 경우 문제가 되지 않으나, 콜백이 하위 컴포넌트에 props로서 전달된다면 그 컴포넌트들은 추가로 다시 렌더링을 수행할 수도 있습니다. 

이러한 종류의 성능 문제를 피하고자, **생성자 안에서 바인딩**하거나 **클래스 필드 문법을 사용**하는 것을 권장합니다.


## 이벤트 핸들러에 인자 전달하기

루프 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는 것이 일반적입니다. 예를 들어, `id`가 행의 id일 경우 다음 코드가 모두 작동합니다.

```jsx
// 1. arrow function
// 명시적으로 e 인자 전달
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

// 2. Function.prototype.bind
// e 인자가 자동으로 전달
<button onClick={this.deleteRow.bind(this, id)}></button>
```

위 두 줄은 동등합니다. 두 경우 모두 React 이벤트를 나타내는 e 인자가 id 뒤에 두 번째 인자로 전달됩니다. 

출처 : https://reactjs-kr.firebaseapp.com/docs/handling-events.html