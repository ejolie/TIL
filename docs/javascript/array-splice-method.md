2019년 4월 29일 월요일

# 배열에서 특정 원소 제거하기

## `Array.splice()`

배열의 `splice()` 메서드는 배열에서 특정 원소를 제거하는 것을 도와준다.

예를 들어 `users` 배열에서 `user2`를 제거해야 한다고 가정해보자.

```js
const users = ["user1", "user2", "user3", "user4"];

console.log(users.splice(1, 1)); // ["user2"]

console.log(users);
// updated users array
// ["user1", "user3", "user4"]
```

`splice()` 메서드의 인자

- 첫 번째 인자 : 어떤 인덱스로부터 삭제를 시작할 것인지
- 두 번째 인자 : 얼마나 많은 원소를 제거할 것인지

## 여러 원소 제거하기

```js
const users = ["user1", "user2", "user3", "user4"];

console.log(users.splice(2, 2));
// users[2]부터 두 개의 원소를 삭제한다. (users[2], users[3])
// ["user3", "user4"]

console.log(users);
// updated users array
// ["user1", "user2"]
```

출처 : https://reactgo.com/javascript-remove-particular-element-from-array/
