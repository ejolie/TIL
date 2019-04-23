2019년 4월 23일 화요일

# 자바스크립트 비교, 반복, 문자열

## 비교문

* `if - else` 문
* `if - else if - else` 문
* 삼항 연산자



### 거짓으로 취급되는 값 (Falsy)

* `false`
* `undefined`
* `null`
* `0`
* `NaN`
* `""` (empty string)

`Boolean` 객체의 참과 거짓 값으로 원시 `boolean` 값 `true`와 `false`를 혼동하지 마세요.

```javascript
let b = new Boolean(false);
if (b) // this condition evaluates to true
```



## 분기문

```javascript
switch (expression) {
    case label_1:
        statements_1
        [break;]
    case label_2:
        statements_2
        [break;]
    default:
        statement_def
        [break;]
}
```



## 반복

### `for` 문

```javascript
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
```

##### 뒤에서 부터 순회

`length`를 한 번만 호출해서 좋다. 하지만 현대의 자바스크립트 엔진은 최적화를 통해 반복문을 최대한 빠르게 처리하는 과정을 거쳐왔으므로 실제로 실험을 해보면 그 차이가 미미하다.

```javascript
for (let i = arr.length; i != 0; i--) {
    console.log(arr[i])
}
```

##### ES6 destructure 활용

```javascript
arr = [1, 2, 3, 4];
for (let i = 0, {length} = arr; i < length; i++) {
    console.log(arr[i])
}
```



### `forEach`

```javascript
let colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));
// red
// green
// blue
```

### `for...of`

반복 가능한 객체(배열, map, set 등)를 통해 반복하는 루프를 만듭니다. `for...in`은 프로퍼티 키를 통해 반복하며 `for...of`는 프로퍼티 값을 통해 반복합니다.

```javascript
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
    console.log(i);
}
// '0', '1', '2', 'foo'

for (let i of arr) {
    console.log(i);
}
// '3', '5', '7'
```



### `for...in` 문

`for...in` 문은 객체의 열거 프로퍼티를 통해 지정된 변수를 반복합니다.

```javascript
const car = {
    make: 'Ford',
    model: 'Mustang',
};

for (let prop in car) {
    console.log(`car.${prop} = ${car.prop}`)
}

// car.make = Ford
// car.model = Mustang
```

### `do...while` 문

### `while` 문



## 예외처리문

* `throw` 문
* `try...catch` 문

### `throw` 문

예외를 사용할 때, 사용되는 값을 포함하는 표현을 명시해야 합니다.

```javascript
throw expression;
```

```javascript
throw 'Error2';
throw 42;
throw true;
throw { toString: fucnction() { return 'I\'m an object!'; } };
```

예외를 사용할 때 객체를 명시할 수 있습니다. 그리고 나서 `catch` 문 안에서 객체의 특성들을 참조할 수 있습니다. 다음 예시는 `myUserException` of type `UserException` 객체를 만듭니다. 그리고 `throw` 문에서 사용합니다.



## 문자열 처리

자바스크립트의 문자와 문자열은 같은 타입으로 모두 문자열입니다.

```javascript
typeof 'abc';
typeof 'a';
typeof 'b';
```

문자열에는 다양한 메서드가 있습니다.

```javascript
'ab:cd'.split(':'); // ['ab','cd']
'ab:cd'.replace(':', '$'); // 'ab$cd'
'   abcde '.trim(); // 'abcde'
```



출처 : [부스트코스] 웹 프로그래밍 > 2. DB 연결 웹 앱 > 2) 자바스크립트 비교-반복-문자열