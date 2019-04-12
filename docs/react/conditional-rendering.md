2019년 4월 12일 금요일

# 조건부 렌더링

React에서 조건부 렌더링은 자바스크립트에서의 조건 처리와 같이 동작합니다. 

`if`나 `조건부 연산자`와 같은 자바스크립트 연산자를 현재 상태를 나타내는 엘리먼트를 만드는 데에 사용하세요.

```jsx
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }
  
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

## 엘리먼트 변수

엘리먼트를 저장하기 위해 변수를 사용할 수 있습니다. 출력의 다른 부분은 변하지 않은 채로 컴포넌트의 일부를 조건부로 렌더링 할 수 있습니다.

로그아웃과 로그인 버튼을 나타내는 두 컴포넌트

```jsx
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```

이제 아래 예시에서 `LoginControl`이라는 **유상태 컴포넌트**를 만들 것입니다. 이 컴포넌트는 현재 상태에 맞게 화면을 렌터링 합니다.

```jsx
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }

   render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

## 논리 `&&` 연산자로 `if`를 인라인으로 표현하기

JSX 안에는 중괄호를 이용해 표현식을 포함할 수 있습니다. 그 안에 자바스크립트 논리 연산자 `&&`을 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있습니다.

```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

자바스크립트에서 **`true && expression`은 항상 `expression`으로 평가**되고, **`false && expression`은 항상 `false`로 평가**됩니다.

따라서 `&&` 뒤의 엘리먼트는 조건이 `true`일때만 출력됩니다.


## 조건부 연산자로 `if else`구문 인라인으로 표현하기

엘리먼트를 조건부로 렌더링하는 다른 방법은 조건부 연산자인 `condition ? true : false`를 사용하는 것입니다.

```jsx
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

```jsx
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}
```

## 컴포넌트가 렌더링하는 것을 막기

가끔 다른 컴포넌트에 의해 렌더링 될 때 컴포넌트 자체를 숨기고 싶을 때가 있을 수 있습니다. 이때는 렌더링 결과를 출력하는 대신 `null`을 반환하면 됩니다.

아래 예시에서는 `<WarningBanner />`가 `warn` prop의 값에 의해 렌더링 됩니다. prop이 `false`라면 컴포넌트는 렌더링하지 않게 됩니다.

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```

컴포넌트의 `render` 메서드로부터 `null`을 반환하는 것은 생명주기 메서드 호출에 영향을 주지 않습니다. 그 예로 `componentDidUpdate`는 계속해서 호출되게 됩니다.