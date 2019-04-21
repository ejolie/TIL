2019년 4월 7일 일요일

# 콜백 함수의 두 가지 동작

## 콜백?
나중에 실행하는 코드

= 나중에 실행하는 함수

### 자바스크립트의 함수
- 다른 함수에 인자로 넘길 수 있다.
- 함수를 리턴 값으로 반환할 수 있다.
- 변수에 함수를 할당할 수 있다.

**자바스크립트의 함수는 일급 객체다!**

```javascript
setTimeout(function() {
	console.log('hello');
}, 1000);
```

`setTimeout()`의 첫 번째 인자는 함수, 두 번째 인자는 시간


## 동기적 콜백과 비동기적 콜백

### 동기적 콜백 (fake)
- `fakeSetTimeout()` : **동기적**으로 콜백 실행
  * 순차적 실행
  * 무조건 콜백이 끝나야만 그 다음 줄로 넘어감
  * 0초 뒤에 '실행해라'

```javascript
function fakeSetTimeout(callback, delay) {
	callback();
}

console.log(0);
fakeSetTimeout(function() {
	console.log('hello');
}, 0);
console.log(1);
```

코드 실행 결과
```
0
hello
1
```

### 비동기적 콜백 (real)
- `setTimeout()` : **비동기적**으로 콜백 실행
  * 0초 뒤에 '큐에 넣어라'

```javascript
console.log(0);
setTimeout(functino() {
	console.log('hello');
}, 0);
console.log(1);
```

코드 실행 결과
```
0
1
hello
```

`setTimeout()`과 비슷한 것을 예로 들면 `button` 태그의 `onClick` 이벤트 핸들러가 있다. `onClick`은 `DOM`에 넣는 것이다. 타이머처럼 자바스크립트 밖에 있는 세상이다. 버튼을 클릭하게 되면 이벤트를 큐에 집어 넣는다.

이 콜백이 큐에 들어가느냐 / 콜 스택에 들어가느냐에 따라 다르다.
출처 : 유튜브 코드종
