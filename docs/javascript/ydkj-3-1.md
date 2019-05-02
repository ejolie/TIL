2019년 5월 2일 목요일

# You Don't Know JS: *this* & Object Prototypes

# Chapter 1: `this` Or That?

## Why `this`?

```js
function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
}

var me = {
	name: "Kyle"
};

var you = {
	name: "Reader"
};

identify.call( me ); // KYLE
identify.call( you ); // READER

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER
```

이 코드는 `identify()`와 `speak()` 함수를 각 객체 내에서 새로 만들지 않고, 여러 *context* (`me` 와 `you` 객체) 에서 재사용하고 있다.

`this`를 사용하는 대신 context 객체를 `indentify()`와 `speak()` 함수에게 명시적으로 넘겨줄 수도 있다.

```js
function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, I'm " + identify( context );
    console.log( greeting );
}

identify( you ); // READER
speak( me ); // Hello, I'm KYLE
```

그러나 `this` 메카니즘은 암시적으로 객체의 참조를 전달하는 더 세련된 방식을 제공한다. 이렇게 하면 더 깔끔한 API 설계를 할 수 있고 재사용을 쉽게 할 수 있다.



## Confusions

우선 `this`가 어떻게 동작하는지를 살펴보기 전에 `this`에 대한 오해들을 떨쳐내야 한다. `this`의 의미에 대한 잘못된 가정이 두 가지 존재하는데, 둘 다 정확하지 않다.

### 자기 자신 (Itself)

**첫 번째 흔한 오해는 `this`가 함수 자신을 참조한다는 것이다.** 왜 함수 안에서 함수 자신을 참조하고 싶어질까? 가장 흔한 이유는 재귀 함수이거나 처음 호출되었을 때 자신과 바인딩을 해제할 수 있는 이벤트 핸들러를 가졌기 때문이다.

처음 JS 메카니즘을 접하는 개발자들은 함수를 객체처럼 참조하는 것(자바스크립트의 모든 함수는 객체다!)이 함수 호출 사이의 *상태* (프로퍼티의 값들)를 저장할 수 있게 해준다고 생각한다. 물론 이것은 가능한 일이며 제한적으로 사용할 수 있지만, 이 책에서는 함수 객체 외에 상태를 저장할 수 있는 더 *좋은* 장소를 사용하는 패턴을 다룰 것이다.

어떻게 `this`가 예상과 달리 함수 자기 자신을 참조할 수 있게 하지 않는지 살펴보겠다.

아래 코드에서 함수의 호출 횟수를 추적해본다.

```js
function foo(num) {
    console.log('foo: ' + num);
    
    // `foo`가 호출되는 횟수를 추적한다.
    this.count++;
}

foo.count = 0;

var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo`의 호출 횟수는?
console.log(foo.count); // 0 -- ??????????
```

`foo`는 4번 호출되었음에도  `foo.count`는 여전히 `0`이다. (`this.count`에서) `this`의 의미를 너무 문자 그대로 해석했기 때문에 예기치 못한 이러한 결과를 얻을 수 있다.

`foo.count = 0` 코드를 실행했을 때, 이것은 사실 `foo` 함수 객체에 `count` 라는 프로퍼티를 추가하게 된다. 하지만 함수 안에 있는 `this.count` 에 대해 말하자면, `this`는 전혀 이 함수 객체를 가리키고 있지 않다. 프로퍼티 이름이 같을지라도, root 객체가 다르기 때문에 혼란이 빚어진다.

**주의:** 그렇다면 내가 증가시켰던 `count`는 어떤 `count`인가? 라고 의문을 가질 수도 있다. 사실 이 코드에서 증가시킨 `this.count`는 새롭게 만들어진 전역 변수 `count` 이고 이것의 값을 찍어보면 `NaN` 이다. 

이 문제의 해결책으로 `count` 프로퍼티를 갖는 다른 객체를 만들어 사용할 수 있다.

```js
function foo(num) {
	console.log( "foo: " + num );

	// `foo`가 호출되는 횟수를 추적한다.
	data.count++;
}

var data = {
	count: 0
};

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo`의 호출 횟수는?
console.log( data.count ); // 4
```

이렇게 `data` 객체를 만들어 `count` 프로퍼티를 증가시키면 문제는 해결할 수 있지만 이것은 진정한 문제점(`this`의 의미와 동작에 관한 이해 부족)을 간과하고 좀 더 친숙한 메카니즘인 어휘 스코프의 안전한 영역으로 대체한다.

함수 객체 내에서 자기 자신을 참조하려면 `this` 만으로는 부족하다. 일반적으로 어휘적 식별자(변수)를 통한 참조가 필요하다.

아래 두 함수를 보자.

```js
function foo() {
    foo.count = 4; // `foo`는 자기 자신을 가리킨다.
}

setTimeout( function() {
    // 익명 함수, 자기 자신 참조 불가
}, 10);
```

첫 번째 함수는 "이름이 있는 함수" 이며, `foo`는 함수 내에서 자기 자신을 가리키는데 사용되는 참조다.

하지만 두 번째 함수에서는 콜백 함수가 `setTimeout()`에 전달되는데 이것은 이름 식별자가 없다 (익명 함수). 따라서 함수 자신을 가리킬 수 있는 적절한 방법이 존재하지 않는다.

위에서 마주친 문제의 또다른 해결법은 함수 객체에 대한 참조로 `this`가 아닌 `foo` 식별자를 사용하는 것이다.

```js
function foo(num) {
	console.log( "foo: " + num );

	// `foo`의 호출 횟수를 추적한다.
	foo.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo`의 호출 횟수는?
console.log( foo.count ); // 4
```

하지만 이 해결법 역시 `this`의 진정한 이해에서는 벗어나 있으며 `foo` 변수의 어휘 스코프에 전적으로 의존하고 있다.

마지막 해결법은 `this`가 `foo` 함수 객체를 가리키도록 강제하는 것이다.

```js
function foo(num) {
	console.log( "foo: " + num );

	// `foo`의 호출 횟수를 추적한다.
	// 주의: `foo`가 호출된 방식에 기반하여 
    // `this`는 이제 `foo`를 가리키고 있다. 
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		// `call(..)`을 사용하면, `this`가
		// (`foo`) 함수 객체 자신을 가리키도록 할 수 있다.
		foo.call( foo, i ); // this, ...arguments
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 4
```

**`this` 사용을 피하는 것 대신에, `this`를 감싸 안았다.** 



### `this`의 스코프(Its Scope)

**두 번째 흔한 오해는 `this`가 함수의 스코프를 가리킨다는 것이다.** 이것은 어떤 때에는 맞기도 하고 틀리기도 해서 어려운 문제다. 

명확히 하자면, `this`는 함수의 어휘 스코프를 참조하지 않는다. 내부적으로 보면, 스코프는 사용 가능한 식별자들에 대한 프로퍼티들을 갖고 있는 객체와 같다. 하지만 스코프 "객체"는 자바스크립트 코드 상에서 접근 불가능하다. 이것은 *엔진*의 내부 구현과 관련된다.

경계를 드나들려고 시도하고(하지만 실패한다.) `this`가 내부적으로 함수의 어휘 스코프를 가리키도록 하는 예시 코드를 살펴보자.

```js
function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log( this.a );
}

foo(); // undefined
```

이것은 사람들이 `this` 에 대해 갖고 있는 오해를 잘 보여주는 예시다. 

첫째로, `bar()` 함수를 `this.bar()` 로 참조하려는 잘못된 시도가 있다. `bar()`를 호출하기 위한 가장 자연스러운 방식은 앞에 있는 `this`를 생략하는 것이다. 

하지만 이러한 코드를 작성하는 개발자들은 `this`를 통해 `foo()`와 `bar()`의 어휘 스코프를 연결하는 다리를 만들려고 한다. 이를 통해 `bar()`가 `foo()`의 내부 스코프에 존재하는 `a` 변수에 접근할 수 있게 시도한다. **이러한 연결을 분가능하다.** 



## What's `this`?

`this`는 코드 작성시에 바인딩되는 것이 아니라 런타임(코드 실행시)에 바인딩된다. `this` 바인딩은 함수가 선언된 장소와 아무 관련이 없고 함수가 호출되는 방식에 달려있다.

함수가 호출될 때, 실행 컨텍스트로 알려진 activation record가 생성된다. 이 record는 함수가 어디서 호출되었는지(콜 스택), 함수가 *어떻게* 호출되었는지, 어떤 파라미터가 전달되었는지 등에 대한 정보를 갖고 있다. 이 record의 프로퍼티 중 하나는 함수 실행동안 사용될 `this` 참조에 대한 정보를 담고 있다.

다음 장에서, 함수 실행이 `this`를 어떻게 바인딩하는지를 결정하는 함수의 **call-site** 를 찾는 법에 관해 다룰 것이다.



## Review

`this`는 함수 자신을 가리키는 것도 아니고, 함수의 어휘 스코프를 가리키는 것도 아니다.

`this`는 함수가 호출되는 방식에 따라 바인딩되며, `this`가 가리키는 것은 함수가 호출된 call-site에 따라 결정된다.



출처 :  [https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md](https://github.com/getify/You-Dont-Know-JS/blob/master/this %26 object prototypes/ch1.md)