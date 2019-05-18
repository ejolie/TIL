2019년 5월 5일 일요일

# 리액트 컴포넌트 라이프 사이클

## Mounting

### `Initialization` (set props and state)

### `componentWillMount`

리액트 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출되는 메서드다.

DOM이 생성되지 않았으므로 DOM을 조작할 수 없고, `render` 메서드가 호출되기 전이므로 `setState`를 사용해도 `render`이 호출되지 않는다.

### `render`

컴포넌트 렌더링을 담당한다.

### `componentDidMount`

컴포넌트가 만들어지고 `render`이 호출된 이후에 호출되는 메서드다. AJAX나 타이머를 생성하는 코드를 작성하는 부분이다.


&nbsp;
## Props Change

### `componentWillReceiveProps(nextProps)`

컴포넌트 생성 후 첫 렌더링을 마친 후 호출되는 메서드다. 컴포넌트가 처음 마운트 되는 시점에서는 호출되지 않는다.

`props`를 받아서 `state`를 변경해햐 하는 경우 유용하다. 이 메서드 내부에서 `setState`를 사용해도 추가적인 렌더링이 발생하지 않는다.


### `shouldComponentUpdate(nextProps, nextState)`

컴포넌트 업데이트 직전에 호출되는 메서드다. `props` 또는 `state`가 변경되었을 때, 리렌더링 여부를 return 값(`true` or `false`)으로 결정한다.

### `render`

### `componentDidUpdate(prevProps, prevState)`

컴포넌트 업데이트 직후에 호출되는 메서드다.


&nbsp;
## State Change

### `shouldComponentUpdate(nextProps, nextState)`

### `componentWillUpdate(nextProps, nextState)`

`shouldComponentUpdate`가 호출된 이후 컴포넌트 업데이트 직전에 호출되는 메서드다. 새로운 `props` 또는 `state`가 반영되기 직전 새로운 값들을 받는다.
이 메서드 안에서 `this.setState()`를 사용하면 무한 루프가 일어나게 되므로 사용하면 안된다.

### `render`

### `componentDidUpdate`

&nbsp;
## Unmounting

### `componentWillUnmount`

컴포넌트가 소멸된 시점에(DOM에서 삭제된 후) 실행되는 메소드다. 컴포넌트 내부에서 타이머나 비동기 API를 사용하고 있을 때, 이를 제거하기에 유용하다.


출처 : https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8