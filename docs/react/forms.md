2019년 4월 23일 화요일

# 폼

**HTML 폼 엘리먼트는 폼 엘리먼트 자체가 내부 상태를 가지기 때문에**, React의 다른 DOM 엘리먼트와 조금 다르게 동작합니다. 

```html
<form>
	<label>
		Name:
		<input type="text" name="name" />
	</label>
	<input type="submit" value="Submit" />
</form>
```

이 폼은 사용자가 폼을 제출하면 새로운 페이지로 이동하는 기본 HTML 폼 동작을 수행합니다. React에서 동일한 동작을 원한다면 그대로 사용하면 됩니다.

하지만 대부분의 경우 **JavaScript 함수로 폼의 제출을 처리하고 사용자가 폼에 입력한 데이터에 접근하도록 하는 것이 편리합니다.** 이를 위한 표준 방식은 **"제어 컴포넌트 (controlled components)"**를 이용하는 것입니다.

## 제어 컴포넌트 (Controlled Component)

HTML에서 `<input>`, `<textarea>`, `<select>`와 같은 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트합니다. 

React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 `setState()`에 의해 업데이트됩니다.

우리는 **React state를 "신뢰 가능한 단일 출처(single source of truth)"로 만들어 두 요소를 결합**할 수 있습니다. 그러면 폼을 렌더링하는 React 컴포넌트는 폼에 발생하는 사용자 입력값을 제어합니다. 이러한 방식으로 **React에 의해 값이 제어되는 입력 폼 엘리먼트를 "제어 컴포넌트(controlled component)"**라고 합니다.

이전 예시가 전송될 때 이름을 기록하고 싶다면 폼을 제어 컴포넌트로 작성할 수 있습니다.

```jsx
class NameForm extends React.Component {
	constructor(props) {
		super(pros);
		this.state = { value: '' };
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}
```

이렇게 하면 **`value` 어트리뷰트는 폼 엘리먼트에 설정되므로 표시되는 값은 항상 `this.state.value`가 되고 React state는 신뢰 가능한 단일 출처가 됩니다.** React state를 업데이트하기 위해 모든 키 입력에서 `handleChange`가 동작하기 때문에 사용자가 입력할 때 보여지는 값이 업데이트됩니다.

**제어 컴포넌트로 사용하면 모든 state 변화는 연관된 핸들러를 가집니다.** 이것을 통해 사용자 입력을 수정하거나 유효성을 검사하는 것이 간단해집니다. 예를 들어, 이름이 모두 대문자로 쓰여지게 하고 싶다면 `handleChange`를 다음과 같이 사용할 수 있습니다.

```jsx
handleChange(event) {
	this.setState({
		value: event.target.value.toUpperCase();
	})
}
```

## textarea 태그

HTML에서 `<textarea>` 엘리먼트는 텍스트를 자식으로 정의합니다.

```html
<textarea>
	Hello there, this is some text in a text area
</textarea>
```

그러나 React에서 <textarea>는 `value` 어트리뷰트를 사용합니다. 이렇게 하면 `<textarea>`를 사용하는 폼은 한 줄의 입력을 사용하는 폼과 비슷하게 작성할 수 있습니다.

```jsx
class EssayForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Please write an essay about your favorite DOM element.'
			// textarea 초깃값 설정
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		alert('An essay was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Essay:
					<textarea value={this.state.value} onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		);
	}
}
```

## select 태그

HTML에서 `<select>` 태그는 드롭 다운 목록을 만듭니다.

```html
<select>
	<option value="grapefruit">Grapefruit</option>
	<option value="lime">Lime</option>
	<option selected value="coconut">Coconut</option>
	<option value="mango">Mango</option>
</select>
```

**`**selected` 옵션이 있으므로 Coconut 옵션이 초기값이 되는 점을 유의해주세요.** React에서는 `selected` 어트리뷰트를 사용하는 대신 **최상단 `select` 태그에 `value` 어트리뷰트를 사용**합니다.

```jsx
class FlavorForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'coconut'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		alert('Your favorite flavor is: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your favorite flavor:
					<select value={this.state.value} onChange={this.handleChange}>					
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value="Submit"s />
			</form>
		)
	}
}
```

> 주의
>
> `select` 태그에 multiple 옵션을 허용한다면 `value` 어트리뷰트에 배열을 전달할 수 있습니다.
```jsx
<select multiple={true} value={['B', 'C']}></select>
```

## file input 태그

HTML에서 `<input type="file">`는 사용자가 하나 이상의 파일을 자신의 장치 저장소에서 서버로 업로드하거나 `File API`를 통해 JavaScript로 조작할 수 있습니다.

값이 읽기 전용이기 때문에서 React에서 **비제어 컴포넌트**입니다.


## 다중 입력 제어하기

여러 `input` 엘리먼트를 제어해야할 때, **각 엘리먼트에 `name` 어트리뷰트를 추가하고 `event.target.name` 값을 통해 핸들러가 어떤 작업을 할지 선택할 수 있게 해줍니다.**

```jsx
class Reservation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests: 2
		};
		
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<form>
				<label>
					Is going:
					<input
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Number of guests:
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange} />
				</label>
			</form>
		)
	}
}
```

주어진 `input` 태그의 `name`에 일치하는 state를 업데이트 하기 위해 **ES6 computed property name** 구문을 사용하고 있습니다.

```jsx
// ES6
this.setState({
	[name]: value
});

// ES5
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

또한, `setState()`는 자동적으로 **현재 state에 일부 state를 병합**하기 때문에 **바뀐 부분에 대해서만 호출**하면 됩니다.


## 제어되는 Input Null 값

**제어 컴포넌트에 value prop을 지정**하면 의도하지 않는 한 **사용자가 변경할 수 없습니다.** `value`를 설정했는데 여전히 수정할 수 있다면 실수로 `undefined`나 `null`로 설정했을 수 있습니다.

예시 코드에서 첫 번째 입력은 잠겨있지만 잠시 후 입력이 가능해집니다.

```jsx
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
	ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

## 제어 컴포넌트의 대안

제어 컴포넌트를 사용하면 데이터를 변경할 수 있는 모든 방법에 대해 이벤트 핸들러를 작성하고 React 컴포넌트를 통해 모든 입력 상태를 연결해야 합니다. 특히 기존의 코드베이스를 React로 변경하고자 할 때나 React가 아닌 라이브러리와 React 애플리케이션을 통합하고자 할 때 짜증날 수 있습니다.

이러한 경우에 입력 폼을 구현하기 위한 대체 기술인 **비제어 컴포넌트**를 확인할 수 있습니다.


## 완전한 해결책

유효성 검사, 방문한 필드 추적 및 폼 제출 처리와 같은 완벽한 해결을 원한다면 Formik이 대중적인 선택 중 하나입니다. 하지만 Formik은 제어 컴포넌트 및 state 관리에 기초하기 때문에 배우는 걸 쉽게 생각하면 안 됩니다.


출처 : https://ko.reactjs.org/docs/forms.html
