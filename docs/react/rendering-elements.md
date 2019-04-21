2019년 4월 12일 금요일

# 엘리먼트 렌더링

엘리먼트 : React 앱의 가장 작은 단위

엘리먼트는 화면에 표시할 내용을 기술합니다.

브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체(plain object)이며 쉽게 생성할 수 있습니다. ReactDOM은 React 엘리먼트와 일치하도록 DOM을 업데이트합니다.

## DOM에 엘리먼트 렌더링하기

```html
<div id="root"></div>
```

`div` 안에 들어가는 모든 엘리먼트를 ReactDOM에서 관리하기 때문에 "루트(root)" DOM 노드라고 부릅니다.

React로 구현된 애플리케이션은 **일반적으로 하나의 루트 DOM 노드**가 있습니다. 

React 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 **`ReactDOM.render()`**로 전달하면 됩니다.

```jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## 렌더링 된 엘리먼트 업데이트하기

React 엘리먼트는 **불변객체**입니다. 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없습니다.

지금까지 소개한 내용을 바탕으로 하면 UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 ReactDOM.render()로 전달하는 것입니다.

> **주의**
>
> 대부분의 React 앱은 `ReactDOM.render()`를 한 번만 호출합니다.

똑딱거리는 시계 예시 코드

```jsx
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

## 변경된 부분만 업데이트하기

ReactDOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하교 필요한 경우에만 DOM을 업데이트합니다.

출처 : https://reactjs-kr.firebaseapp.com/docs/rendering-elements.html