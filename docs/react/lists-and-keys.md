2019년 4월 15일 월요일

# 리스트와 키 {docsify-ignore-all}

## 다수 컴포넌트 렌더링

`map()` 함수를 이용해서 자바스크립트 배열을 JSX 엘리먼트 리스트로 변환할 수 있습니다. 

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
  <li>{number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

## 기본 리스트 컴포넌트

일반적으로 리스트를 컴포넌트 안에서 렌더링합니다.

이전 예제를 `numbers` 배열을 받아서 순서 없는 목록을 출력하는 컴포넌트로 리팩토링 할 수 있습니다.

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

이 코드를 실행하면, 리스트 아이템에 키를 넣어야 한다는 경고가 표시됩니다. "키(key)"는 엘리먼트 리스트를 만들 때 포함해야 하는 특별한 문자열 속성입니다.

`numbers.map()` 안의 리스트 아이템에 `key`를 할당하여 이슈를 해결해봅시다.

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <li key={number.toString()}>
      {number}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

## 키

키는 React가 어떤 아이템이 추가, 삭제, 업데이트 되었는지 인식하는 것을 도와줍니다. 엘리먼트에 안정적인 id를 제공하려면 배열 내부 요소에 키를 부여해야 합니다. 대부분의 경우 데이터의 id를 키로 사용합니다.

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

만약 렌더링된 아이템에서 사용할 안정적인 id가 없다면, 아이템 인덱스를 키로 넣어 추후에 다시 정렬할 수도 있습니다.

```jsx
const todoItems = todos.map((todo, index) => 
  <li key={index}>
    {todo.text}
  </li>
);
```

아이템의 순서가 바뀔 수 있는 경우 키에 인덱스를 사용하지 않는 것이 좋습니다. 이로 인해 성능이 저하되거나 컴포넌트의 state에 따른 문제가 발생할 수 있습니다. 

만약 리스트 아이템에 명시적으로 키를 지정하지 않으면 React는 기본적으로 인덱스를 키로 사용합니다.

## 키로 컴포넌트 추출하기

키는 주변 배열의 컨텍스트에서만 의미가 있습니다.

예를 들어, `ListItem` 컴포넌트를 추출한 경우, `Listitem` 자체의 루트 `<li>` 요소가 아닌 배열의 `<ListItem />` 요소가 키를 가지고 있어야 합니다.

### 예제: 잘못된 키 사용법

```jsx
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

### 예제: 올바른 키 사용법

```jsx
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

## 키는 형제 간 고유한 값이어야 한다.

배열 내에서 사용하는 키는 형제 간에 고유해야 합니다. 그러나 전역적으로 고유할 필요는 없습니다. 두 개의 다른 배열을 생성할 때 동일한 키를 사용해도 됩니다.

```jsx
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return(
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```

키는 React를 도와주지만 컴포넌트에게 전달되지는 않습니다. 만약 컴포넌트에서 키와 동일한 값이 필요하다면 다른 이름의 prop으로 전달해야 합니다.

```jsx
const contetn = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title}
  />
);
```

위 예시에서 Post 컴포넌트는 `props.id`를 읽을 수 있지만 `props.key`는 읽을 수 없습니다.

## JSX에서 map() 포함하기

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem
      key={number.toString()}
      value={number}
    />
  );

  return (
    <ul>
      {listItems}
    </ul>
  )
}
```

JSX는 중괄호를 이용하면 모든 표현식을 포함할 수 있기 때문에 `map()`도 인라인으로 포함시킬 수 있습니다.

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem
          key={number.toString()}
          value={number}
        />  
      )}
    </ul>
  );
}
```

가독성을 위해 변수로 추출할지에 대한 것은 개발자가 판단해야 합니다. `map()` 바디가 너무 중첩되어 있다면, 컴포넌트로 추출하는 것이 좋습니다.


출처 : https://reactjs-kr.firebaseapp.com/docs/lists-and-keys.html