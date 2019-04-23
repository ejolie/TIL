2019년 4월 23일 화요일

# 비제어 컴포넌트

대부분의 경우에 폼을 구현할 때 **제어 컴포넌트**를 사용하는 것이 좋습니다. 

* 제어 컴포넌트 : 폼 데이터가 React 컴포넌트에서 다뤄집니다.
* 비제어 컴포넌트 : 폼 데이터가 DOM 자체에서 다뤄집니다.

모든 state 업데이트에 대한 이벤트 핸들러를 작성하는 대신 비제어 컴포넌트를 만들려면 `ref`를 사용하여 DOM에서 폼 값을 가져올 수 있습니다.

아래 코드는 비제어 컴포넌트에서 단일 이름을 허용합니다.

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
```

**비제어 컴포넌트는 DOM에서 신뢰 가능한 출처를 유지**하므로 비제어 컴포넌트를사용할 때 React와 non-React 코드를 통합하는 것이 쉬울 수 있습니다.

빠르고 간편하게 적은 양의 코드를 작성할 수 있으나, **일반적으로 제어된 컴포넌트를 사용해야 합니다**.

## 기본 값

React 렌더링 생명주기에서 **폼 엘리먼트의 `value` 어트리뷰트는 DOM의 value를 대체**합니다.

**비제어 컴포넌트를 사용하면 React 초깃값을 지정하지만, 그 이후의 업데이트는 제어하지 않는 것이 좋습니다.** 이러한 경우에 `value` 어트리뷰트 대신 `defaultValue`를 지정할 수 있습니다.

```jsx
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"
          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
`<input type="checkbox">`와 `<input type="radio">`는 `defaultChecked`를 지원하고 `<select>`와 `<textarea>`는 `defaultValue`를 지원합니다.

## 파일 입력 태그

```html
<input type="file" />
```

파일 입력 태그는 프로그래밍적으로 값을 설정 할 수 없고 **사용자만이 값을 설정할 수 있기 때문에 항상 비제어 컴포넌트**입니다.

File API를 사용하여 파일과 상호작용해야 합니다. 아래 예시에서는 제출 핸들러에서 파일에 접근하기 위해서 DOM 노드의 `ref`를 만드는 방법을 보여주고 있습니다.

```jsx
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <FileInput />,
  document.getElementById('root')
);
```

출처 : https://ko.reactjs.org/docs/uncontrolled-components.html