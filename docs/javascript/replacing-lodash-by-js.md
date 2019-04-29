2019년 4월 29일 월요일

# 순수 자바스크립트 함수로 Lodash 대체하기

Lodash나 Underscore.js와 같은 라이브러리의 핵심 디자인 컨셉은 **함수형 프로그래밍**이다. 

> 함수형 프로그래밍? **사이드 이펙트가 없고 상태를 변경시키지 않는** 순수 함수들로 이뤄짐



## 함수형 프로그래밍이란?

* 함수형 프로그래밍 : 계산들을 expression(표현식)의 평가로 모델링
* 명령형 프로그래밍 : 실행시 전역 상태를 변경하는 statement(문)으로 구성된 프로그램



## 1. find

```js
const users = [
  { 'user': 'joey',  'age': 32 },
  { 'user': 'ross',    'age': 41 },
  { 'user': 'chandler', 'age': 39 }
]

// Lodash
_.find(users, o => o.age < 40)

// Native
users.find(o => o.age < 40)
```



## 2. filter

```js
const numbers = [10, 40, 230, 15, 18, 51, 1221]

// Lodash
_.filter(numbers, num => num % 3 === 0)

// Native
numbers.filter(num => num % 3 === 0)
```



## 3. first and rest

```js
const names = ["first", "middle", "last", "suffix"]

// Lodash
const firstName = _.first(names)
const otherNames = _.rest(names)

// Native
const [firstName, ...otherNames] = names
console.log(firstName)	// 'first'
console.log(otherNames)	// ['middle', 'last', 'suffix']
```



## 4. each

```js
// Lodash
_.each([1, 2, 3], (val, idx) => {
  console.log(val)
})

_.forEach({ 'a': 1, 'b': 2 }, (val, key) => {
  console.log(key)
})

// Native
[1, 2, 3].forEach((val, idx) => {
  console.log(val)
})

[1, 2, 3].map(val => console.log(val))

({ 'a': 1, 'b': 2 }).forEach((val, key) => {
  console.log(key)	// Error
})

for (let key in obj) {
  console.log(key)
}
```



## 5. every

```js
const elements = ['cat', 'dog', 'bat']

// Lodash
_.every(elements, e => e.length === 3)

// Native
elements.every(e => e.length === 3) // true
```





## 6. some

```js
const elements = ['cat', 'dog', 'bat']

// Lodash
_.some(elements, e => e.startsWith('c'))

// Native
elements.some(e => e.startsWith('c'))
```





## 7. includes

```js
const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,97]

// Lodash
_.includes(primes, 47)

// Native
primes.includes(79)
```





## 8. uniq

```js
var elements = [1,2,3,1,2,4,2,3,5,3]

// Lodash
_.uniq(elements)

// Native 1. Set
[...new Set(elements)]

// Native 2. filter
elements.filter((val, idx, arr) => arr.indexOf(val) === idx)
```





## 9. compact

array에서 falsey 또는 undefined 값을 지우는 함수

```js
var array = [undefined, 'cat', false, 434, '', 32.0]

// Lodash
_.compact(array)

// Native
array.filter(Boolean)
```

`array.filter(Boolean)` 을 하게 되면 모든 원소를 boolean 값으로 바꾼다음 non-falsey 한 값만 리턴하게 된다.



출처 : <https://blog.bitsrc.io/you-dont-need-lodash-or-how-i-started-loving-javascript-functions-3f45791fa6cd>

