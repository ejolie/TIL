2019년 4월 7일 일요일

# ES6 화살표 함수 () => {}에 없는 세 가지 {docsify-ignore-all}

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
함수는 함수가 실행될 때 함수 자신의 스코프 안에 자기 만의 `this`가 존재한다. 익명 함수 안에서 `this`가 자기 스코프에 없으면 익명 함수가 실행되는 컨텍스트 안에서 찾아본다.

익명 함수는 `this`가 없기 때문에 `bind`, `apply`, `call`로 `this`를 주입할 수가 없다. 스코프 체인 순서에 따라 `this`를 누적하게 된다.

```javascript
var myObj = {
	count: 3,
	setCounter: function() {
		console.log(this.count);
	}
};

myObj.setCounter();
```

**`this`는 호출되는 방법에 따라 결정된다.** 그래서 `myObj.setCounter()`로 실행할 때의 `this`는 `myObj` 안의 `this`가 된다.

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

**출력 결과**
```
0
<button id="btn">Press</button>
```

`btn.addEventListener`에서 콜백 함수를 실행하는 것이 `btn`이므로 `this`는 `button`이 된다. 

이때 `myObj`를 출력하고 싶으면 `this`를 `bind` 해준다. `this`는 `myObj {count: 0, setCounter: f}`으로 출력된다.

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
```

**그런데 화살표 함수를 쓰게 되면 `bind`가 필요 없어진다.** `bind`는 `this`를 연결해주는 애인데 화살표 함수에는 `this`가 없기 때문에 바로 이 화살표 함수가 선언된 함수 위치와 동일한 `this`를 사용하게 된다.

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

**출력 결과**
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
원하는 결과를 얻게 된다.

### cf. new 키워드
* 기존 함수 : new 키워드 가능
* 화살표 함수 : new 키워드 불가, prototype도 생성하지 않음

```javascript
const MyClass = function() {
}

new MyClass();
```


## 3. arguments

```javascript
const myFunc = fucntion() {
	console.log(arguments);
}

myFunc(1, 2, 3, 4);
```

* `arguments`: 배열은 아닌데 배열처럼 접근할 수 있음

```javascript
const myFunc2 = () => {
	console.log(arguments);
}

myFunc2(1, 2, 3, 4); // 에러 발생!
```

### 2, 3 응용
```javascript
function outer() {
	const myFunc2 = () => {
		console.log(arguments);
	}
	myFunc2();
}

outer(1, 2, 3, 4);
```

**출력 결과**
```
Arguments(4) [1, 2, 3, 4]
```

화살표 함수 자신에게 `arguments`가 없으니까 자신이 정의된 outer 위치 스코프에서 `arguments`를 찾게 된다.

```javascript
const myFunc2 = (...args) => {
	console.log(args);
}

myFunc2(1, 2, 3);
```

* `...args` 의미 : 여러 개가 들어올텐데 그걸 묶어서 `args`에 배열로 받을게

**출력 결과**
```
[1, 2, 3]
```

출처 : 유튜브 코드종