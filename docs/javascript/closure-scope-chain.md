2019년 4월 7일 일요일

# 클로저와 스코프 체인

```javascript
function outer() {
	var a = 1;
	console.log(a);
}

outer();
```

이 코드의 실행 결과로는 1이 출력된다. `a`에 무슨 값이 들어있는지 찾는 곳이 바로 **스코프**이다. 여기서 `a`는 `outer` 함수의 스코프에 속한다.

**자바스크립트는 함수 단위로 스코프가 생성된다.** (ES6에서는 달라지지만, 스코프의 기본은 함수 단위다.)

```javascript
function outer() {
	var a = 1;

	function inner() {
		var a = 2;
		console.log(a);
	}

	inner();
}

outer();
```

이 코드의 실행 결과로는 2가 출력된다. `a`에 무슨 값이 들어 있는지 찾아야 하는데 `inner` 함수 스코프에 `a = 2`라는 값이 있으니 이 값을 찾아 출력한다.

```javascript
function outer() {
	var a = 1;
	var b = 'B';
	function inner() {
		var a = 2;
		console.log(b);
	}

	inner();
}

outer();
```

이 코드의 실행 결과로는 'B'가 출력된다. `inner` 스코프에서 먼저 `b`를 찾으려고 하는데 `b`가 없으니까 그 다음 찾는 스코프가 `outer` 스코프다. `inner` 함수가 생성된 곳이 바로 `outer` 함수 스코프 안이기 때문에 `outer`로 넘어가서 찾아본다.

전역(`global`) 스코프도 따로 있다.

```javascript
var d = 'X';

function outer() {
	var a = 1;

	function inner() {
		var a = 2;
		console.log(d);
	}

	inner();
}

outer();
```

이 코드의 실행 결과로는 'X'가 출력된다.

스코프끼리 연결되어 있는 것을 **스코프 체인**이라 한다.

```javascript
var d = 'X';

function outer() {
	var a = 1;
	var b = 'B';

	function inner() {
		var a = 2;
		console.log(b);
	}
	return inner();
}

var someFunc = outer();
someFunc();
```

이 코드의 실행 결과로는  'B'가 출력된다. 함수를 생성한 시점의 스코프 체인을 계속 들고 있는다. `outer()` 실행 이후에도 `inner`가 `outer`에 대한 스코프를 들고 있고 전역에서도 이 `outer`에 대한 스코프를 들고 있고 여기에 접근할 수 있다.

출처 : 유튜브 코드종
