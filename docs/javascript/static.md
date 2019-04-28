2019년 4월 29일 월요일

# 자바스크립트의 static 이해하기

리액트를 배우다보면 다음과 같이 `static`이 들어간 코드를 자주 접할 수 있다. `static`은 주로 `defaultProps`, `propTypes`, `contextTypes`, `displayName`과 함께 쓰인다.

```jsx
import React from 'react';

class Hello extends React.Component {
  static defaultProps = {
    name: 'World'
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

그런데 아래 코드를 주목해보자.

```jsx
import React from 'react';

class Counter extends React.Component {
  static displayName = 'Counter';

  state = { count: 0 };

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
```

`state`는 리액트 컴포넌트의 클래스 생성자 안에서 사용되는 게 일반적이다. 그런데 위 코드에서는 생성자 없이 `state`가 사용되었다. 또한 `state` 앞에 `static` 키워드가 붙지도 않았다. 

그렇다면 대체 `static`은 무슨 일을 하는 건지 궁금해진다. 구글 검색 결과 다음과 같은 답을 할 수 있었다.

> `static` 프로퍼티는 클래스의 프로퍼티이며, 클래스 인스턴스의 프로퍼티가 아니다.

간단한 예시로 확인해보자.

```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Foo extends Component {
  // 클래스 정의(또는 프로토타입)에 종속
  static displayName = 'Foo';
  static propTypes = { bar: PropTypes.string };
  static defaultProps = { bar: 'Bar' };
  
  // 클래스나 프로토타입의 각 인스턴스에 종속
  state = { hello: 'Hello' };
  
  render() {
    return this.state.hello + this.props.bar;
  }
}
```

만약 `Foo` 컴포넌트의 인스턴스를 두 개 만들었다면, `displayName`, `propTypes`, `defaultProps`는 두 인스턴스 내에 동일하게 존재할 것이다. 하지만 각 인스턴스의 `state`는 각자 독립적으로 갱신될 것이다.

## static 프로퍼티와 non-static 프로퍼티

![static 프로퍼티와 non-static 프로퍼티](https://cdn-images-1.medium.com/max/1600/1*mwBJDkfaSJL4Pq_vQUr-Uw.png)

`thisFoo`와 `thatFoo`는 각자의 `state`를 `non-static` 프로퍼티로 갖고, 반면 동일한 `static` 프로퍼티로는 `displayName`, `propTypes`, `defaultProps`를 갖는다.

## 더 나아가기

사실 자바스크립트의 클래스 문법은 프로토타입의 추상화 버전이다. [자바스크립트의 클래스](https://javascript.info/class)가 어떻게 구현되었는지를 이해한다면 더 깊은 이해를 할 수 있을 것이다. 


출처 : https://medium.com/front-end-weekly/understanding-static-in-javascript-10782149993
