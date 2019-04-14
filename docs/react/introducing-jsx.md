2019년 4월 12일 금요일

# JSX (JavaScript eXtension) {docsify-ignore-all}

JSX : 자바스크립트 기반, React "엘리먼드"를 만드는 언어 

과거 패러다임에서는 자바스크립트와 마크업 언어를 같은 곳에서 작성하는 것이 나쁜 습관으로 여겨졌습니다. 하지만 이제는 기능(함수, 동작)과 화면(뷰)를 결합하는 것이 화면에 대한 추론을 직관적으로 만듭니다.

## JSX / ES5 / ES6 ???

### ES5

> `ES` : ECMAScript

ES5는 "일반적인 자바스크립트"입니다. 자바스크립트의 다섯 번째 업데이트 버전이고, 2009년에 나왔습니다. 이후 수년간 주요 브라우저들에 의해 지원되어 왔습니다.

### ES6

ES6은 2015년에 나온 자바스크립트의 새로운 버전이며 ES5에 비해 문법적으로 아주 편리한 기능들이 추가되었습니다. ES6은 주요 브라우저들에서 거의 다 지원이 되지만 오래된 버전의 브라우저에서는 호환성이 떨어집니다. 예를 들어, IE11은 ES6을 지원하지 않습니다.

더 많은 브라우저에서 ES6를 사용할 수 있도록 몇 가지 일을 할 수 있습니다.

1. *Transpile* : ES6 -> ES5
2. Include a *shim* or *polyfill*


## 표현식(expression) 사용하기

자바스크립트 표현식을 중괄호 `{}`로 묶어 사용할 수 있습니다.
표현식의 예로는 `2 + 2`, `user.firstName`, `formatName(user)` 등이 있습니다.

```jsx
function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user =  {
	firstName: 'Harper',
	lastName: 'Perez'
};

const element = {
	<h1>
		Hello, {formatName(user)}!
	</h1>
};

ReactDOM.render(
	element,
	document.getElementById('root)
);
```

JSX 안에서는 `if else` 문을 사용할 수 없으므로 삼항 연산자를 사용해야 합니다.

```jsx
import React from 'react';

class App extends React.Component {
	render() {
		return (
			let i = 1;
			return (
				<div>
					<h1>{i == 1 ? 'True!' : 'False'}</h1>
				</div>
			)
		)
	}
}
```


## JSX도 표현식입니다.

컴파일이 끝나면, JSX 표현식이 정규 자바스크립트 함수 호출이 되고 자바스크립트 객체로 인식됩니다.

즉 if 문이나 for 반복 내에서 JSX를 사용할 수 있으며, 변수에 할당하거나 매개 변수로 전달하거나 함수에서 반환할 수 있습니다.

```jsx
function getGreeint(user) {
	if (user) {
		return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Stranger.</h1>;
}
```

## 속성(attributes) 정의하기

속성에 따옴표 `""`를 이용해 문자열 리터럴을 정의할 수 있습니다.

```jsx
const element = <div tabIndex="0"></div>;
```

속성에 중괄호 `{}`를 이용해 자바스크립트 표현식을 포함시킬 수 있습니다.

```jsx
const element = <img src={user.avatarUrl}></img>;
```

> **경고**
>
> JSX는 HTML보다 자바스크립트에 가깝기 때문에, ReactDOM은 HTML 속성 이름 대신 **`camelCase`** 컨벤션에 따른 속성 이름을 사용합니다. 또한, 자바스크립트 예약어와 겹치지 않는 단어를 사용합니다.
>
> 예를 들어, JSX에서 HTML 속성 `class`는 `className`이 됩니다. 또한, HTML 속성 `for`은 `htmlFor`이 됩니다.

만약 자신만의 속성을 사용하고 싶다면 `data-` 접두사를 사용하면 됩니다. 아래 예시에서는`p` 엘리먼트에 `data-myattribute` 속성을 추가했습니다.

```jsx
import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Header</h1>
				<h2>Content</h2>
				<p data-myattribute="somevalue">This is the content!!!</p>
			</div>
		)
	}
}

export default App;
```


## 자식(children) 정의하기

만약 빈 태그(닫는 태그가 없는 태그)라면 XML처럼 `/>`을 이용해 태그를 닫아야 합니다.

```jsx
const element = <img src={user.avatarUrl}/>;
```

JSX 태그는 자식을 가질 수 있습니다.

```jsx
const element = (
	<div>
		<h1>Hello!</h1>
		<h2>Good to see you here.</h2>
	</div>
);
```

## 인젝션 공격 예방

유저 입력을 JSX 내에 포함시키는 것이 안전합니다.

```jsx
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

기본적으로, React DOM은 렌더링 되기 전에 JSX 내에 포함된 모든 값을 **이스케이프** 합니다. 따라서 어플리케이션에 명시적으로 작성되지 않은 내용은 절대 삽입할 수 없습니다.

모든 것은 렌더링 되기 전에 문자열로 변환됩니다. 이렇게 하면 *XSS(Cross-site scripting) 공격* 을 막을 수 있습니다.

> **Cross-site Scripting**
>
> 웹 애플리케이션에서 많이 나타나는 취약점 중 하나로, 관리자가 아닌 사람이 웹 페이지에 악성 스크립트를 삽입할 수 있는 취약점이다. 
> 
> 이 취약점은 웹 애플리케이션이 사용자로부터 입력 받은 값을 제대로 검사하지 않고 사용할 경우 나타난다.

## 객체 표현

Babel은 JSX를 `React.createElement()` 호출로 컴파일합니다.

아래 두 예제는 동일합니다.

```jsx
const element = (
	<h1 className="greeting">
		Hello, world!
	</h1>
)
```

JSX는 런타임에 일반적인 자바스크립트로 번역(변환)됩니다. 이 과정을 거치면 아래와 같은 모습이 됩니다.

```jsx
const element = React.createElement(
	'h1',
	{ className: 'greeting' },
	'Hello, world!'
)
```

컴포넌트가 렌더링 되면, React 엘리먼트 트리 또는 이 컴포넌트가 출력하는 HTML 엘리먼트의 virtual representation을 출력합니다.

React.createElement() 는 버그 없는 코드를 작성하는 데 도움을 주는 몇 가지 체크를 하는데 기본적으로는 아래와 같은 객체를 생성합니다.

```jsx
// Note: this structure is simplified.
const element = {
	type: 'h1',
	props: {
		className: 'greeting',
		children: 'Hello, world'
	}
}
```

이 객체를 **React 엘리먼트** 라고 부릅니다. 화면에서 볼 수 있는 내용을 나타낸다고 생각해도 좋습니다. React는 이 객체를 읽어들이고 이를 사용하여 DOM을 구성하고 최신 상태로 유지합니다.


## 스타일링

React는 인라인 스타일을 권장합니다. 인라인 스타일을 사용하고 싶다면 `camelCase`를 준수해야 합니다. 또한, 숫자로 된 값 뒤에는 자동으로 `px`이 추가됩니다.

```jsx
import React from 'react';

class App extends React.Component {
	render() {
		var myStyle = {
			fontSize: 100,
			color: '#ff0000',
		}
		return (
			<div>
				<h1 style={myStyle}>Header</h1>
			</div>
		)
	}
}
```

## 주석

주석을 달고 싶다면 자바스크립트 주석을 중괄호 `{}`로 감싸면 됩니다.

```jsx
import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Header</h1>
				{// End of the line comment... }
				{/* Multi line comment... */}
			</div>
		)
	}
}
```

출처 : https://reactjs-kr.firebaseapp.com/docs/introducing-jsx.html