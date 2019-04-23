2019년 4월 23일 화요일

# 자바스크립트 변수, 연산자, 타입



## 변수

변수는 `var`, `let`, `const`로 선언할 수 있습니다.

* ES6 이전 : `var`
* ES6 이후 : `let`, `const`



## 연산자

우선순위를 표현하기 위해서는 `()`를 사용하면 됩니다.

* 수학 연산자 : `+`, `-`, `*`, `/`, `%`
* 논리 연산자
* 관계 연산자
* 삼항 연산자



### 논리 연산자

```javascript
const name = 'crong';
const result = name || 'codesquad';
console.log(result);

var name = ''
var result = name || 'codesquad';
console.log(result);
```

```javascript
let result = false && true;
```

`&&` 연산자는 `true` 인지를 확인하지만,  첫 번째가 이미 `false`라면 이후의 값은 확인할 필요가 없습니다.

### 삼항 연산자

간단한 비교와 값 할당은 삼항 연산자를 사용합니다.

```javascript
const data = 11;
const result = (data > 10) ? 'ok' : 'fail';
console.log(result);
```

### 비교 연산자

비교는 `==` 보다는 `===`를 사용합니다. `==`로 인한 다양한 오류 상황이 있는데 아래 결과를 참고해봅시다.

```javascript
0 == false;
"" == false;
null == false;
0 == "0";
null == undefined;
```

## 타입

### Primitive

* undefined
* null
* boolean
* number
* string
* Symbol

### Object

* object
* function
* array
* Date
* RegExp

타입은 선언할 때가 아니라 **실행 타입**에 결정됩니다. 함수 안에서의 파라미터나 변수는 실행될 때 그 타입이 결정됩니다.

타입을 체크하는 또렷한 방법은 없습니다. 정확하게는 `toString.call` 함수를 이용해서 그 결과를 매칭하곤 하는데, 문자, 숫자와 같은 원시 타입은 `type of` 키워드를 사용해서 체크할 수 있습니다.

배열은 타입을 체크하는 `isArray` 함수가 표준으로 생겼습니다.

출처 : [부스트코스] 웹 프로그래밍 > 2. DB 연결 웹 앱 > 1) 자바스크립트 변수-연산자-타입