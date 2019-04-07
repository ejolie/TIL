2019년 4월 7일 일요일

# ES6 화살표 함수 () => {}에 없는 세 가지
1. 함수 이름
2. this
3. arguments

## 1. 함수 이름
```javascript
function myFunc() {

}

const myFunc = function() {

}
```

```javascript
() => {

}

// 익명 함수를 통제하는 법: 변수에 담는다.
const myFunc = () => {

}
```

## 2. this
함수는 함수가 실행될 때 함수 자신의 스코프 안에 자기 만의 this가 존재한다.
익명 함수 안에서 쓰는 this는, 자기 스코프에 없으면, 실행되는 컨텍스트 안에서 뒤져보게 된다.

this가 없기 때문에 bind, apply, call로 this 주입 불가
스코프 체인 순서에 따라 this를 누적하게 된다.

```javascript
var myObj = {
	count: 3,
	setCounter: function() {
		console.log(this.count);
	}
};

myObj.setCounter();
```

this는 호출되는 방법에 따라 결정된다.
그래서 myObj.setCounter()로 실행할 때의 this는 myObj 안의 this가 된다.

```javascript
const btn = document.getElementById('btn');
var myObj = {
	count: 0,
	setCounter: function() {
		console.log(this.count);
		btn.addEventListener('click', function() {
			console.log(this);
		})
	}
};

myObj.setCounter();
```

출력 결과
```
0
<button id="btn">Press</button>
```

btn.addEventListener에서 콜백 함수를 실행하는 것이 btn이므로 this는 button이 된다.
이때 myObj 를 출력하고 싶으면 this를 bind해준다.
this => myObj {count: 0, setCounter: f} 출력된다.

```javascript
const btn = document.getElementById('btn');
var myObj = {
	count: 0,
	setCounter: function() {
		console.log(this.count);
		btn.addEventListener('click', (function() {
			console.log(this);
		}).bind(this));
	}
};

myObj.setCounter();
````

그런데 arrow function을 쓰게되면 bind가 필요 없어진다.
bind는 this를 연결해주는 애인데 arrow는 this가 없는 애이기 때문에
바로 이 arrow가 선언된 함수 위치와 동일한 this를 사용하게 된다.

```javascript
const btn = document.getElementById('btn');
var myObj = {
	count: 0,
	setCounter: function() {
		console.log(this.count);
		btn.addEventListener('click', () => {
			console.log(this.count++);
		})
	}
};

myObj.setCounter();
```

원하는 결과를 얻게 된다.
```
0
1
2
3
4
5
6
7
...
```

기존 함수 : new 키워드 가능

```javascript
const MyClass = function() {

}

new MyClass();
```

화살표 함수 : new 키워드 불가, prototype도 생성하지 않음


## 3. arguments

```javascript
const myFunc = fucntion() {
	console.log(arguments);
}

myFunc(1, 2, 3, 4);
```

배열은 아닌데 배열처럼 접근할 수 있는 아규먼츠

```javascript
const myFunc2 = () => {
	console.log(arguments);
}

myFunc2(1, 2, 3, 4);
```

에러 발생!

2 + 3 응용
```javascript
function outer() {
	const myFunc2 = () => {
		console.log(arguments);
	}
	myFunc2();
}

outer(1, 2, 3, 4);
```

출력 결과
```
Arguments(4) [1, 2, 3, 4]
```

화살표 함수 자신에게 없으니까 자신이 정의된 outer 위치 스코프에서 arguments를 찾게 된다.

```javascript
const myFunc2 = (...args) => {
	console.log(args);
}

myFunc2(1, 2, 3);
```

...args 의미 : 여러개가 들어올텐데 그걸 묶어서 args에 배열로 받을게

출력 결과
```
[1, 2, 3]
```