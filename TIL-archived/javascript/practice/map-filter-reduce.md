# Map, Filter, Reduce in JS

## Map

`map()`은 array의 모든 요소에 대해 function을 적용한 결괏값으로 새로운 array를 돌려준다.

```js
const numbers = [2, 4, 8, 10];
const havles = numbers.map(x => x / 2);
// halves is [1, 2, 4, 5]
```





## Filter

`filter()`는 array의 모든 요소에 대해 function을 적용하여 조건을 만족하는 요소만으로 구성된 새로운 array를 돌려준다.

```js
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);
// longWords is ["exuberant", "destruction", "present"]
```



## Reduce

`reduce()`는 accumulator와 array의 각 요소에 대해 function을 적용하여 하나의 값으로 reduce되도록 한다.

```js
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
// total is 7
```





출처 : https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d