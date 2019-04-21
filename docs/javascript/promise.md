2019년 4월 7일 일요일

# Promise {docsify-ignore-all}

콜백 지옥을 탈출하게 해주는 Promise

### `ajax`로 주소와 콜백함수 넘기기
자바스크립트에서 비동기를 다루는 가장 기본적이고 많이 쓰이는 패턴이다.

```javascript
ajax('http://a.com', (result) => {

});
````

### 딜레이 함수로 동일한 패턴 만들기
```javascript
function delay(sec, callback) {
	setTimeout(() => {
		callback(new Date(), toISOString());
	}, sec * 1000);
}

console.log('start', new Date().toISOString());
delay(1, (result) => {
	console.log(result);
})
console.log('hello');
```

```javascript
delay(1, (result) => {
	console.log(1, result);

	delay(1, (result) => {

		delay(1, (result) => {
			console.log(3, result);
		});

		console.log(2, result);
	});
});
```

실행 결과
```
1
2
3
```

이렇게 코드를 짜다 보니 점점 눈으로 결과를 예측하기 어려워진다. 그래서 나온게 `Promise`와 `Async`, `Await`이다!

### Promise 형태로 delay 함수를 바꾸게 되면
```javascript
delayP(1).then((result) => {
	console.log(1, result);
});
```

`delayP`의 결과가 Promise의 인스턴스를 만들게 되고 그 인스턴스가 `then`이라는 메서드를 갖는다.

그러면, Promise를 만들어 보자.

```javascript
function delayP(sec) {
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve(new Date().toISOString());
		}, sec * 1000);
	});
}
```

아까처럼 1초, 2초, 3초 뒤에 출력을 하게 하려면 콜백 안에 콜백이 아니라, 콜백을 순차적으로 지정한다. 앞에서 실행한 Promise가 리턴하는 게 `resolve`가 되어야만 다음에 이어지는 `then`에서 콜백을 실행한다.

```javascript
delayP(1).then((result) => {
	console.log(1, result);
	return delayP(1);
}).then((result) => {
	console.log(2, result);
	return delayP(1);
}).then((result) => {
	console.log(3, result);
	return delayP(1);
}).then((result) => {
	console.log(result);
});
```

코드 실행 결과
```
1
2
3
undefined
```

아무것도 리턴하지 않아도 결국 `then`의 리턴 값은 `resolve`가 된 Promise

출처 : 유튜브 코드종