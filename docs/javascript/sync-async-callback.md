2019년 4월 7일 일요일

# Callback 함수의 두 가지 동작

## 콜백?
나중에 실행하는 코드
= 나중에 실행하는 함수 @자바스크립트

### 자바스크립트의 함수
- 다른 함수에 인자로 넘길 수 있으며
- 리턴 값으로 함수를 넣을 수 있고
- 변수에 함수를 넣을 수 있음
=> 함수는 1급 개체

```javascript
setTimeout(function() {
	console.log('hello');
}, 1000);
```
첫 번째 인자: 함수
두 번째 인자: 시간


## 동기적 콜백과 비동기적 콜백
- 페이크셋타임아웃 : 동기적으로 콜백 실행
- 진짜 셋타임아웃 : 비동기적으로 콜백 실행
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
동기적 : 순차적 실행, 무조건 콜백이 끝나야만 그다음 줄로 넘어감, 0초 뒤에 '실행해라'
결과
```
0
hello
1
```

비동기적 : setTimeout 사용시, 0초 뒤에 '큐에 넣어라'
```javascript
console.log(0);
setTimeout(functino() {
	console.log('hello');
}, 0);
console.log(1);
```
결과
```
0
1
hello
```

setTimeout과 비슷한 것이 button의 onClick 핸들러
onClick은 DOM에 넣는 것
타이머처럼 자바스크립트 밖에 있는 세상
버튼에서 클릭하게 되면 집어 넣는 것이 큐
=> 이 콜백이 큐에 들어가느냐 / 콜스택에 들어가느냐에 따라 다름
