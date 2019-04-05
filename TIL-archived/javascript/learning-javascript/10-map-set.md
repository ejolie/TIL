# 10. 맵과 셋

ES6에서 새로 도입한 데이터 구조로 *맵(Map)*과 *셋(Set)*이 있습니다. 맵은 키와 값을 연결한다는 점에서 객체와 비슷하고, 셋은 중복을 허용하지 않는다는 점만 제외하면 배열과 비슷합니다.

## 10.1 맵
ES6 이전에는 키와 값을 연결하려면 객체를 사용해야 했습니다. 하지만 객체를 이런 목적으로 사용하면 여러 가지 단점이 생깁니다.
* 프로토타입 체인 때문에 의도하지 않은 연결이 생길 수 있습니다.
* 객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없습니다.
* 키는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 써서 값과 연결할 수 없습니다.
* 객체는 프로퍼티 순서를 전혀 보장하지 않습니다.

맵 객체는 이 결함을 모두 해결했고, 키와 값을 연결할 목적이라면 (문자열만 키로 쓴다 해도) 객체보다 나은 선택입니다. 예를 들어 사용자 객체가 여럿 있고 이들에게 각각 역할을 부여한다고 합시다.

```javascript
const u1 = { name: ‘Cynthia’ };
const u2 = { name: ‘Jackson’ };
const u3 = { name: ‘Olive’ };
const u4 = { name: ‘James’ };
```

먼저 맵을 만들고 맵의 `set()` 메서드를 써서 사용자 역할을 할당합니다.
```javascript
const userRoles = new Map();
userRoles.set(u1, ‘User’);
userRoles.set(u2, ‘User’);
userRoles.set(u3, ‘Admin’);
```

`set()` 메서드는 체인으로 연결할 수 있어서 타이핑 하는 수고를 덜어 줍니다.
```javascript
userRoles
	.set(u1, ‘User’)
	.set(u2, ‘User’)
	.set(u3, ‘Admin’);
```

생성자에 배열의 배열을 넘기는 형태로 써도 됩니다.

```javascript
const userRoles = new Map([
	[u1, ‘User’],
	[u2, ‘User’],
	[u3, ‘Admin’],
]);
```

이제 `u2`의 역할을 알아볼 때는 `get()`메서드를 쓰면 됩니다.

```javascript
userRoles.get(u2);	// ‘User’
```

맵에 존재하지 않는 키에 `get`을 호출하면 `undefined` 를 반환합니다. 맵에 키가 존재하는지 확인하는 `has()` 메서드도 있습니다.

```javascript
userRoles.has(u1);	// true
userRoles.get(u1);	// ‘User’
userRoles.has(u4);	// false
userRoles.get(u4);	// undefined
```

맵에 이미 존재하는 키에 `set()`을 호출하면 값이 교체됩니다.

```javascript
userRoles.get(u1);	// ‘User’
userRoles.set(u1, ‘Admin);
userRoles.get(u1);	// ‘Admin’;
```

`size`프로퍼티는 맵의 요소 숫자를 반환합니다.

```javascript
userRoles.size;	// 3
```

`keys()`메서드는 맵의 키를,  `values()` 메서드는 값을,  `entries()` 메서드는 첫 번째 요소가 키이고 두 번째 요소가 값인 배열을 각각 반환합니다. 이들 메서드가 반환하는 것은 모두 이터러블 객체이므로 `for...of` 루프를 쓸 수 있습니다.

```javascript
for (let u of userRoles.keys())
	console.log(u.name);

for (let r of userRoles.values())
	console.log(r.name);

for (let ur of userRoles.entries())
	console.log(`${ur[0].name}: ${ur[1]}`);

// 맵도 분해(destruct)할 수 있습니다.
// 분해하면 좀 더 자연스러운 코드가 됩니다.
for (let [u, r] of userRoles.entries())
	console.log(`${u.name}: ${r}`);

// entries() 메서드는 맵의 기본 이터레이터입니다.
// 위 코드는 다음과 같이 단축해서 쓸 수 있습니다.
for (let [u, r] of userRoles)
	console.log(`${u.name}: ${r}`);
```

이터러블 객체보다 배열이 필요하다면 확산 연산자(spread operator)를 쓰면 됩니다.

```javascript
[...userRoles.values()];		// [‘User’, ‘User’, ‘Admin’]
```

맵의 요소를 지울 때는 `delete()` 메서드를 사용합니다.

```javascript
userRoles.delete(u2);
userRoles.size;		// 2
```

맵의 요소를 모두 지울 때는 `clear()` 메서드를 사용합니다.

```javascript
userRoles.clear();
userRoles.size;		// 0
```


## 10.2 위크맵
`WeakMap`은 다음 차이점을 제외하면 `Map`과 완전히 같습니다.
* 키는 반드시 객체여야 합니다.
* `WeakMap`의 키는 가비지 콜렉션에 포함될 수 있습니다.
* `WeakMap`은 이터러블이 아니며 `clear()` 메서드도 없습니다.

일반적으로 자바스크립트는 코드 어딘가에서 객체를 참조하는 한 그 객체를 메모리에 계속 유지합니다. 예를 들어 `Map`의 키인 객체 `o`가 있다면, 자바스크립트는 `Map`이 존재하는 한 `o`를 메모리에 계속 유지합니다. `WeakMap`에서는 그렇지 않습니다. 따라서 `WeakMap`은 이터러블이 될 수 없습니다. 가비지 콜렉션 중인 객체를 노출할 위험이 너무 크기 때문입니다.
`WeakMap`의 이런 특징은 객체 인스턴스의 전용(private)키를 저장하기에 알맞습니다.

```javascript
const SecretHolder = (function() {
	const secrets = new WeakMap();

	return class {
		setSecret(secret) {
			secrets.set(this, secret);
		}
		getSecret() {
			return secrets.get(this);
		}
	}
})();
```

앞의 예제에서는 `WeakMap`과 그 위크맵을 사용하는 클래스를 함께 IIFE에 넣었습니다. IIFE 외부에서는 그 인스턴스에 비밀스런 내용을 저장할 수 있는 `SecretHolder` 클래스를 얻게 됩니다. 비밀을 저장할 때는 `setSecret` 메서드를 써야만 하고, 보려 할 때는 `getSecret` 메서드를 써야만 합니다.
일반적인 `Map`을 써도 되지만, 그렇게 하면 `SecretHolder`인스턴스에 저장한 내용은 가비지 콜렉션에 포함되지 않습니다. 

프로퍼티를 꼭 보호해야 한다면 스코프를 이용해 보호하는 `WeakMap` 인스턴스를 사용할 수 있습니다. `Car`클래스를 다음과 같이 고치면 기어 프로퍼티를 완벽하게 보호할 수 있습니다.

```javascript
const Car = (function() {
	const carProps = new WeakMap();

	class Car {
		constructor(make, model) {
			this.make = make;
			this.model = model;
			this._userGears = [‘P’, ‘N’, ‘R’, ‘D’];
			carProps.set(this, { userGear: this._userGears[0] });
		}
		
		get userGear() {
			return carProps.get(this).userGear;
		}

		set userGear(value) {
			if (this._userGears.indexOf(value) < 0)
				throw new Error(`Invalid gear: ${value}`);
			carProps.get(this).userGear = value;
		}

		shift(gear) {
			this.userGear = gear;
		}
	}
	return Car;
})();
```

여기서는 즉시 호출하는 함수 표현식을 써서 `WeakMap`을 클로저로 감싸고 바깥에서 접근할 수 없게 했습니다. `WeakMap`은 클래스 외부에서 접근하면 안 되는 프로퍼티를 안전하게 저장합니다. 

