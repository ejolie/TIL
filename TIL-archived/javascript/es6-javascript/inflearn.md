# Set & WeakSet

## 1. Set 으로 유니크한 배열 만들기

```javascript
let mySet = new Set();

mySet.add('crong');
mySet.add('hary');
mySet.add('crong');

mySet.forEach(function(v) {
    console.log(v);
})
// 'crong'
// 'hary'

console.log(mySet.has('crong'));
// true

mySet.delete('crong');
```

### Set

* 중복없이 유일한 값을 저장하려고 할 때
* 이미 존재하는지 체크할 때 유용하다.



## 2. WeakSet 으로 효과적으로 객체타입 저장하기

### WeakSet

* 참조를 가지고 있는 객체만 저장이 가능하다.

* 객체형태를 중복없이 저장하려고 할 때 유용하다.

```javascript
let arr = [1, 2, 3, 4];
let ws = new WeakSet();

ws.add(arr);
// ws.add(111);
// ws.add('111');
// ws.add(null);
ws.add(function() {});

let arr2 = [5, 6, 7, 8];
let obj = {arr, arr2};

ws.add(obj);

arr = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));
```



# Map & WeakMap

## 1. Map & WeakMap 추가정보를 담은 객체 저장하기





## 2. WeakMap 클래스 인스턴스 변수 보호하기





# Template

## 1. Template 처리



## 2. Tagged Template literals



# Function

## 1. Arrow function 활용



## 2. Arrow function의 this context

