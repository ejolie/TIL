2019년 5월 13일 월요일

출처 : https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/

# Vue.js 입문서

## Vue는 무엇인가?

MVVM 패턴의 ViewModel 레이어에 해당하는 View 단의 라이브러리

> MVVM 패턴?
>
> - **M**odel : Plain JavaScript Objects
> - **V**iew : DOM
> - **V**iew**M**del : Vue

- 데이터 바인딩과 화면 단위를 컴포넌트 형태로 제공, 관련 API를 지원하는 궁극적 목적을 가짐

- Angular의 **2 way data bindings** 제공

- 컴포넌트 간 통신의 기본 골격은 React의 **1 way Data Flow (부모 -> 자식)**과 유사

## MVVM 패턴이란?

- MVC(Model, View, Controller) 패턴 방식에서 기인함

- ViewModel(~= Controller) : 화면 앞단의 화면 동작 관련 로직과 뒷단의 데이터 처리 및 서버 로직을 분리하고, 뒷단에서 넘어온 데이터를 Model에 담아 View러 넘겨주는 중간 지점

## Vue 인스턴스

### Vue 인스턴스 생성자

```js
// vm : ViewModel
const vm = new Vue({
  // options 정의
});
```

Vue 객체를 생성할 때 `data`, `template`, `el`, `methods`, `life cycle callback` 등의 options을 포함할 수 있다.

각 options으로 미리 정의한 vue 객체를 확장하여 재사용이 가능하다. 하지만 아래의 방법 보다는 template에서 custom element로 작성하는 것이 더 좋다.

```js
const MyComponent = Vue.extend({
  // options 정의
});

// 위에서 정의한 options를 기본으로 하는 컴포넌트 생성
const myComponentInstance = new MyComponent();
```

### Vue 인스턴스 라이프 사이클 초기화

Vue 객체가 생성될 때 아래의 초기화 작업을 수행한다.

- 데이터 관찰

- 템플릿 컴파일

- DOM에 객체 연걸

- 데이터 변경시 DOM 업데이트

이 초기화 작업 외에도 개발자가 의도하는 커스텀 로직을 아래와 같이 추가할 수 있다.

```js
const vm = new Vue({
  data: {
    a: 1
  },

  created: function() {
    // this : vm
    console.log("a is: " + this.a);
  }
});
```

이 외에도 라이프 사이클 단계에 따라 `mounted`, `updated`, `destroyed` 등을 사용할 수 있다. 이 라이프 사이클 초기화 메서드로 커스텀 로직을 수행하기 때문에 Vue에서는 따로 Controller를 갖고 있지 않다.

## Vue 컴포넌트

- 컴포넌트? : 화면에 비춰지는 뷰의 단위를 쪼개어 재활용 가능한 형태로 관리하는 것

컴포넌트 등록은 아래와 같은 코드로 생성 가능하다.

```html
<div id="app">
  <my-component></my-component>
</div>
```

```js
// 등록
Vue.component("my-component", {
  template: "<div>A custom component!</div>"
});

// Vue 인스턴스 생성
new Vue({
  el: "#app"
});
```

**주의할 점 : Vue 인스턴스를 생성하기 전에 꼭 컴포넌트부터 등록한다!**

컴포넌트의 `data` 속성은 꼭 함수로 작성해야 한다.

```js
// 아래 Vue 컴포넌트는 오류를 발생시킨다.
Vue.component("my-component", {
  data: {
    message: "hello"
  }
});

const data = { text: "hello" };
Vue.component("my-component", {
  data: function() {
    return data;
  }

  // 모든 컴포넌트가 같은 값을 공유하지 않게 아래와 같이 수정한다.
  // data: function() {
  //   return {
  //     text: 'hello'
  //   }
  // }
});
```

### 전역 컴포넌트와 지역 컴포넌트

컴포넌트를 뷰 인스턴스에 등록해 사용할 때 다음과 같이 global하게(전역으로) 등록할 수 있다.

```js
Vue.component("my-component", {
  // ...
});
```

아래와 같은 방법으로 local로 등록할 수 있다.

```js
const cmp = {
  data: function() {
    return {
      // ...
    }
  }
  template: '<hr>',
  methods: {}
}

new Vue({
  components: {
    'my-cmp': cmp
  }
})
```

### 부모와 자식 컴포넌트의 관계

구조상 상-하 관계에 있는 컴포넌트의 통신은

- 부모 -> 자식 : props down (pass props)
- 자식 -> 부모 : events up (emit events)

### Props

모든 컴포넌트는 각 컴포넌트 자체의 스코프를 갖는다.

- 예를 들어, 하위 컴포넌트가 상위 컴포넌트의 값을 바로 참조할 수 없다.
- **상위에서 하위로 값을 전달하려면 props 속성을 사용한다.**

```html
<!-- 상위 컴포넌트 -->
<div id="app">
  <!-- 하위 컴포넌트에 상위 컴포넌트가 갖고 있는 message를 전달함 -->
  <child-component v-bind:passed-data="message"></child-component>
</div>
```

```js
// 하위 컴포넌트
// - 아래 상위 컴포넌트의 data의 message를 passedData에 넘겨 받음
Vue.component("child-component", {
  props: ["passedData"],
  template: "<p>{{ passedData }}</p>"
});

// 상위 컴포넌트
const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue! from Parent Component"
  }
});
```

**주의할 점: js에서 props 변수 명명을 카멜 기법(passedData)으로 하면 html에서는 케밥 기법(passed-data)으로 해야 한다.**

### 같은 레벨의 컴포넌트 간 통신

동일한 상위 컴포넌트를 가진 2개의 하위 컴포넌트 간의 통신은

- child(하위) -> parent(상위) -> 다시 2개의 children (하위)

순으로 이루어진다. **컴포넌트 간의 직접적인 통신을 불가능하도록 되어 있는게 Vue의 기본 구조다.**

### Event Bus
