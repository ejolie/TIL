# 6. 객체지향 프로그래밍

* 클래스 기반 객체지향 언어
  * 클래스로 객체의 기본적인 형태와 기능을 정의하고, 생성자로 인스턴스를 만들어서 사용할 수 있다. 클래스에 정의된 메서드로 여러 가지 기능을 수행할 수 있다.
  * 모든 인스턴스가 클래스에 정의된 대로 같은 구조이고 보통 런타임에 바꿀 수 없다.
  * 정확성, 안전성, 예측성 등의 관점에서 클래스 기반 언어는 프로토타입 기반의 언어보다 좀 더 나은 결과를 보장한다.
  * Java, C++
* 프로토타입 기반 객체지향 언어
  * 객체의 자료구조, 메서드 등을 동적으로 바꿀 수 있다.
  * 동적으로 자유롭게 객체의 구조와 동작 방식을 바꿀 수 있다는 장점이 있다.
  * JavaScript



## 6.1 클래스, 생성자, 메서드

Java, C++ 등의 경우 `class` 라는 키워드를 제공하여 프로그래머는 클래스를 만들 수 있다. 클래스와 같은 이름의 메서드로 생성자를 구현한다. 하지만 자바스크립트는 거의 모든 것이 객체이고, 특히 함수 객체로 많은 것을 구현해낸다. 클래스, 생성자, 메서드도 모두 함수로 구현이 가능하다.

```javascript
function Person(arg) {
    this.name = arg;
    
    this.getName = function() {
        return this.name;
    }
    
    this.setName = function(value) {
        this.name = value;
    }
}

var me = new Person('zzoon');
console.log(me.getName());	// zzoon

me.setName('iamhjoo');
console.log(me.getName());	// iamhjoo
```

__`new` 키워드로 새로운 객체 `me` 를 만들었음__에 주목하자. 이 형태는 기존 객체지향 프로그래밍 언어에서 한 클래스의 인스턴스를 생성하는 코드와 매우 유사하다. __함수 `Person` 이 클래스이자 생성자의 역할__ 을 한다. 

자바스크립트에서 클래스 기반의 객체지향 프로그래밍의 기본적인 형태는 이와 같다. __클래스 및 생성자의 역할을 하는 함수__ 가 있고, 사용자는 __new 키워드로 인스턴스를 생성하여 사용__ 할 수 있다.

하지만 이 예제는 문제가 많다. 이 예제의 `Person` 함수의 구현이 바람직하지 못하다. 이 `Person` 을 생성자로 하여 여러 개의 객체를 생성한다고 가정해보자.

```javascript
var me = new Person('me');
var you = new Person('you');
var him = new Person('him');
```

이와 같이 객체를 생성해 사용하면 겉으로는 별 문제 없이 작동하는 것을 볼 수 있다. 하지만 __각 객체는 자기 영역에서 공통적으로 사용할 수 있는 `setName()` 함수와 `getName()` 함수를 따로 생성하고 있다.__ 이는 불필요하게 중복되는 영역을 메모리에 올려놓고 사용함을 의미하고 자원 낭비를 가져온다.

따라서 앞의 문제를 해결하려면 다른 방식의 접근이 필요한데, 여기서 활용할 수 있는 자바스크립트의 특성이 __함수 객체의 프로토타입__ 이다.

```javascript
function Person(arg) {
    this.name = arg;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.setName = function() {
    this.name = value;
}
```

위 코드에서는 `Person` 함수 객체의 `prototype` 프로퍼티에 `getName()` 과 `setName()` 함수를 정의하였다. 이 `Person` 으로 객체를 생성한다면 각 객체는 각자 따로 함수 객체를 생성할 필요 없이 `setName()` 과 `getName()` 함수를 프로토타입 체인으로 접근할 수 있따.

이와 같이 자바스크립트에서 클래스 안의 메서드를 정의할 때는 __프로토타입 객체에 정의한 후, `new` 로 생성한 객체에서 접근할 수 있게  하는 것이 좋다.__  더글라스 크락포드는 당므과 같은 함수를 제시하면서 메서드를 정의하는 방법을 소개한다.

```javascript
Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
}
```

이 방식을 이용하면 다음과 같이 코드를 작성할 수 있다.

```javascript 
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
}

function Person(arg) {
    this.name = arg;
}

Person.method('setName', function(value) {
    this.name = value;
});

Person.method('getName', function() {
    return this.name;
});
```

