2019년 4월 7일 일요일

# 클로저와 스코프 체인

```javascript
function outer() {
	var a = 1;
	console.log(a);
}

outer();
```

결과로 1이 찍힌다.

a에 무슨 값이 들어있는지 찾는 곳이 바로 스코프 => outer 함수 스코프
자바스크립트는 함수 단위로 스코프가 생성된다.
outer용 스코프에는 a = 1이 들어간다.
ES6에서는 달라지지만, 스코프의 기본은 함수 단위

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

결과로 2가 찍힌다.

a에 무슨 값이 들어 있는지 찾아야 하는데
inner용 스코프가 생기고 거기에 a = 2이 들어간다.

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

결과로 'B'가 찍힌다.
inner에서 먼저 b를 찾아봤는데 b가 없으니까
그 다음 찾는 스코프가 outer 스코프
inner가 생성된 곳이 바로 outer 범위 안이기 때문에 outer로 넘어가서 찾아본다.

global 스코프도 따로 있다.

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

결과로 'X'가 찍힌다.

스코프끼리 연결되어 있는 것이 바로 스코프 체인

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

'B'가 찍힌다.
생성한 시점의 스코프 체인을 계속 들고 있는다.
outer() 실행 이후에도 inner가 outer에 대한 스코프를 들고 있고
글로벌에서도 이 outer에 대한 스코프를 들고 있고 여기에 접근할 수 있다.
