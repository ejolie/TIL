2019년 4월 29일 월요일



# forEach에 대해 당신이 몰랐던 세 가지



## 1. `return` 은 루프를 멈추지 않는다.

아래의 코드가 `1 2` 를 출력한 뒤 멈출 것 같나요?

```js
array = [1, 2, 3, 4];

array.forEach(function (element) {
  console.log(element);
  
  if (element === 2)
    return;
});

// Output: 1 2 3 4
```

사실은 그렇지 않습니다. `1 2 3 4` 가 출력됩니다.

그 이유는 바로 `forEach` 안에 **콜백 함수** 를 집어넣기 때문입니다. 콜백 함수는 일반적인 함수처럼 실행되기 때문에 콜백 함수 내에서  `return` 을 하는 것과 상관없이 array의 각 element에 함수를 실행시켜 끝까지 루프를 돕니다.

공식 MDN 문서에 따르면,

>에러를 발생시키지 않는 이상 `forEach()` 루프를 중단시키거나 갑자기 빠져나올 방법은 존재하지 않습니다. 만약 루프를 멈춰야 할 필요가 있다면, `forEach()` 말고 다른 방법을 사용하는 게 좋습니다.



위의 코드를 다시 작성해보면 아래와 같습니다.

```js
const array = [1, 2, 3, 4];

const callback = function(element) {
  console.log(element);
  
  if (element === 2)
    return;
}

for (let i = 0; i < array.length; i++) {
  callback(array[i]);
}

// Output: 1 2 3 4
```



## 2. `break` 를 사용할 수 없다.

`forEach` 루프에서 `break` 를 사용할 수 있을까요?

```jsx
const array = [1, 2, 3, 4];
array.forEach(function(element) {
  console.log(element);
  
  if (element === 2) 
    break;
});
// Output: Uncaught SyntaxError: Illegal break statement
```

사실 콜백 함수 안에서  `break` 는 루프 안에 있는 것이 아니므로 에러가 발생하게 됩니다.

정 필요하다면 일반적인 `for` 루프를 사용하세요.

```js
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  
  if (array[i] === 2) 
    break;
}
// Output: 1 2
```



## 3. `continue` 를 사용할 수 없다.

아래 코드가 `2` 를 건너뛰고 `1 3 4` 를 출력할 것 같나요?

```js
const array = [1, 2, 3, 4];
array.forEach(function (element) {
  if (element === 2) 
    continue;
  
  console.log(element);
});
// Output: Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
```

사실 콜백 함수 안에서  `continue` 는 루프 안에 있는 것이 아니므로 에러가 발생하게 됩니다.

정 필요하다면 일반적인 `for` 루프를 사용하세요.

```js
for (let i = 0; i < array.length; i++) {
  if (array[i] === 2) 
    continue;
  
  console.log(array[i]);
}
// Output: 1 3 4
```



### 참고

`return` 을 이용해서 `1 3 4` 를 출력할 수 있다.

```js
array = [1, 2, 3, 4];

array.forEach(function (element) {
  if (element === 2)
    return;
  
  console.log(element);
});

// Output: 1 3 4
```



`filter` 를 이용할 수 있다.

```js
array.filter(e => e !== 2)
		.forEach(console.log);
```



출처 : https://medium.com/front-end-weekly/3-things-you-didnt-know-about-the-foreach-loop-in-js-ff02cec465b1