# 9. 객체와 객체지향 프로그래밍

배열과 마찬가지로 자바스크립트 객체 역시 *컨테이너* 지만, 크게 보면 다음 두 가지 측면에서 배열과 다릅니다.
* 배열은 값을 가지며 각 값에는 숫자형 인덱스가 있습니다. 객체는 프로퍼티를 가지며 각 프로퍼티에는 문자열이나 심볼 인덱스가 있습니다.
* 배열에는 순서가 있습니다. 반면 객체에는 그런 순서가 보장되지 않습니다.

## 9.1.1 for...in
```javascript
const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for (let prop in o) {
	if (!o.hasOwnProperty(prop)) continue;
	console.log(`${prop}: ${o[prop]}`);
```

객체 프로퍼티를 나열할 땐 `for...in` 을 주로 사용합니다. `hasOwnProperty`는 이 장 후반에 알게 될 상속된 프로퍼티가 `for...in`에 나타날 위험을 제거하기 위해 사용합니다.
`for...in`루프에는 키가 심볼인 프로퍼티는 포함되지 않습니다.

## 9.1.2 Object.keys
`Object.keys`

```javascript
const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`);
```

이 예제는 `for...in` 루프를 썼을 때와 같은 결과이고 `hasOwnProperty`를 체크할 필요는 없습니다. 객체의 프로퍼티 키를 배열로 가져와야 할 때는 `Object.keys`가 편리합니다. 예를 들어 객체에서 `x`로 시작하는 프로퍼티를 모두 가져온다면 다음과 같이 할 수 있습니다.

```javascript
const o = { apple: 1, ballon: 3, guitar: 4, xylophone: 5 };

Object.keys(o)
		.filter(prop => prop.match(/^x.))
		.forEach(prop => console.log(`${prop}: ${o[prop]}`);
```

## 9.2.2 클래스는 함수다
ES6에서 `class` 키워드를 도입하기 전까지, 클래스를 만든다는 것은 곧 클래스 생성자로 사용할 함수를 만든다는 의미였습니다. `class`문법이 훨씬 더 직관적이고 단순하긴 하지만, 사실 `class`는 단축 문법일 뿐이며 자바스크립트의 클래스 자체가 바뀐 것은 아닙니다. 따라서 자바스크립트의 클래스 자체를 이해하는 것이 중요합니다.
클래스는 사실 함수일 뿐입니다. ES5에서는 `Car` 클래스를 다음과 같이 만들었을 것입니다.
```javascript
function Car(make, model) {
	this.make = make;
	this.model = model;
	this._userGears = [‘P’, ‘N’, ‘R’, ‘D’];
	this._userGear = this.userGears[0];
}
```

ES6에서도 똑같이 할 수 있습니다.

```javascript
class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this._userGears = [‘P’, ‘N’, ‘R’, ‘D’];
		this._userGear = this.userGears[0];
	}

	get userGear() {
		return this._userGear;
	}

	set userGear(value) {
		if (this._userGears.indexOf(value) < 0)
			throw new Error(`Invalid gear: ${value}`);
		this._userGear = value;
	}

	shift(gear) {
		this.userGear = gear;
	}
```

## 9.2.3 프로토타입
클래스의 인스턴스에서 사용할 수 있는 메서드라고 하면 그건 *프로토타입(prototype)* 메서드를 말하는 것입니다. 예를 들어 `Car`의 인스턴스에서 사용할 수 있는 `shift` 메서드는 프로토타입 메서드입니다. 프로토타입 메서드는 `Car.prototype.shift`처럼 표기할 때가 많습니다. `Array`의  `forEach`를 `Array.prototype.forEach`라고 쓰는 것과 마찬가지로 말입니다. 이제 프로토타입이 무엇인지, 자바스크립트가 *프로토타입* 체인을 통해 어떻게 *동적 디스패치(dynamic dispatch)* 를 구현하는지 알아봅시다.

모든 함수에는 `prototype` 이라는 특별한 프로퍼티가 있습니다. 일반적인 함수에서는 프로토타입을 사용할 일이 없지만, 객체 생성자로 동작하는 함수에서는 프로토타입이 대단히 중요합니다. 

함수의 `prototype`프로퍼티가 중요해지는 시점은 `new`키워드로 새 인스턴스를 만들었을 때입니다. `new`키워드로 만든 새 객체는 생성자의 `prototype`프로퍼티에 접근할 수 있습니다. 객체 인스턴스는 생성자의 `prototype`프로퍼티를 `__proto__` 프로퍼티에 저장합니다.

프로토타입에서 중요한 것은 *동적 디스패치*라는 매커니즘입니다. 여기서 디스패치는 메서드 호출과 같은 의미입니다. 객체의 프로퍼티나 메서드에 접근하려 할 때 그런 프로퍼티나 메서드가 존재하지 않으면 자바스크립트는 *객체의 프로토타입*에서 해당 프로퍼티나 메서드를 찾습니다. 클래스의 인스턴스는 모두 같은 프로토타입을 공유하므로 프로토타입에 프로퍼티나 메서드가 있다면 해당 클래스의 인스턴스는 모두 그 프로퍼티나 메서드에 접근할 수 있습니다.

인스턴스에서 메서드나 프로퍼티를 정의하면 프로토타입에 있는 것을 가리는 효과가 있습니다. 자바스크립트는 먼저 인스턴스를 체크하고 거기에 없으면 프로토타입을 체크하기 때문입니다.

```javascript
const car1 = new Car();
const car2 = new Car();
car1.shift === Car.prototype.shift;	// true
car1.shift(‘D’);
car1.shift(‘d’);						// error
car1.userGear;						// ‘D’
car1.shift === car2.shift			// true

car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
car1.shift === Car.prototype.shift;	// false
car1.shift === car2.shift;			// false
car1.shift(‘d’);
car1.userGear;						// ‘D’
```

이 예제는 자바스크립트에서 동적 디스패치를 어떻게 구현하는지 잘 보여줍니다. `car1` 객체에는 `shift` 메서드가 없지만,  `car1.shift(‘D’)`를 호출하면 자바스크립트는  `car`의 프로토타입에서 그런 이름의 메서드를 검색합니다.  `car1`에  `shift` 메서드를 추가하면  `car1`과 프로토타입에 같은 이름의 메서드가 존재하게 됩니다. 이제  `car1.shift(‘d’)` 를 호출하면  `car1`의 메서드가 호출되고 프로토타입의 메서드는 호출되지 않습니다.

## 9.2.4 정적 메서드
지금까지 우리는 *인스턴스 메서드*, 즉 인스턴스에서 사용하게끔 만든 메서드를 주로 살펴봤습니다. 메서드에는 인스턴스 메서드 외에도 *정적 메서드(클래스 메서드)*가 있습니다. 이 메서드는 특정 인스턴스에 적용되지 않습니다. 정적 메서드에서 `this`는 인스턴스가 아니라 클래스 자체에 묶입니다. 하지만 일반적으로 정적 메서드에는 `this` 대신 클래스 이름을 사용하는 것이 좋은 습관입니다. 

정적 메서드는 클래스에 관련되지만 인스턴스와는 관련이 없는 범용적인 작업에 사용됩니다. 정적 메서드는 여러 인스턴스를 대상으로 하는 작업에도 종종 쓰입니다.

```javascript
class Car {
	static getNextVin() {
		return Car.nextVin++;
		// this.nextVin++; 이라고 써도 되지만,
		// Car을 앞에 쓰면 정적 메서드라는 점을 상기하기 쉽습니다.
	}
```
