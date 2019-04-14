# prototype 과 __proto__

## 함수란 무엇인가? 

함수는 statement처럼 보이는데 사실 객체이다. 따라서 아래 두 줄의 코드는 같은 표현이다.

```javascript
function Person() {}
var Person = new Function();
```

자바스크립트에서 함수는 객체이므로 프로퍼티를 가질 수 있다.

```javascript
function Person(name, first, second) {
	this.name = name;
	this.first = first;
	this.second = second;
}
```
이런 함수를 선언하면 두 개의 객체가 생긴다. Person과 Person의 prototype이다.

Person이라는 내부적으로 `prototype`이라는 프로퍼티가 생기고 이것은 Person의 prototype을 가리킨다.

Person의 prototype은 `constructor`이라는 프로퍼티가 생기고 이것은 Person을 가리킨다.

```javascript
Person.prototype.sum = function() {};
```

이런 함수를 정의하게 되면 Person의 prototype에 sum이라는 프로퍼티를 만들고 함수를 정의한다.

```javascript
var kim = new Person('kim', 10, 20)
```

이렇게 새로운 kim이라는 객체를 생성하면 이 객체는 Person의 constructor function이 실행된 결과 this의 값들이 셋팅이 되고 name, first, second라는 프로퍼티를 갖게 된다.

그리고 `__proto__`라는 프로퍼티가 같이 생성되는데 이것은 kim이라는 객체를 생성한 Person의 prototype을 가리키게 된다.

이렇게 되면 우리는 `Person.prototype`이나 `kim.__proto__`를 통해서 Person의 prototpye에 접근할 수 있게 된다.

만약 우리가 `console.log(kim.name)`을 했는데 kim에 name이라는 프로퍼티가 있으면 그걸 바로 출력하고, 만약에 없다면 `kim.__proto__`에서 name이 있는지 찾으러 간다.

`kim.sum()`을 하게 되면 kim에 sum이 없으므로 `kim.__proto__`에서 sum을 찾아 실행한다.
