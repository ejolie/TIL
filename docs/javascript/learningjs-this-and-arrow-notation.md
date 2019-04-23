2019년 1월 29일 화요일

# This와 Arrow Notation

## this 키워드

일반적으로 `this`는 객체의 프로퍼티인 함수에서 의미가 있습니다. 메서드를 호출하면 `this`는 호출한 메서드를 소유하는 객체가 됩니다.

```javascript
const o = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}!`; }
}
o.speak();	// "My name is Wallace!"
```

`o.speak()`을 호출하면 `this`는 `o`에 묶입니다.

`this`는 함수를 어떻게 선언했느냐가 아니라 어떻게 호출했느냐에 따라 달라진다는 것을 이해해야 합니다. 즉, `this`가 `o`에 묶인 이유는 `speak`가 `o`의 프로퍼티여서가 아니라, `o`에서 `speak`을 호출했기 때문입니다. 같은 함수를 변수에 할당하면 어떻게 되는지 봅시다.

```javascript
const speak = o.speak;
speak === o.speak;  // true; 두 변수는 같은 함수를 가리킵니다.
speak();            // "My name is undefined!"
```

함수를 이렇게 호출하면 자바스크립트는 이 함수가 어디에 속하는지 알 수 없으므로 `this`는 `undefined`에 묶입니다.

중첩된 함수 안에서 `this`를 사용하려다 보면 혼란스러울 때가 많습니다. 다음 예제를 보십시오. 이 예제에는 메서드 안에 보조 함수가 있습니다.

```javascript
const o = {
    name: 'Julie',
    greetBackwards: function() {
        function getReverseName() {
            let nameBackward = '';
            for (let i = this.name.length-1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },
};
o.greetBackwards();
```
앞의 예제에서는 이름을 거꾸로 쓰고자 중첩된 함수 `getReverseName`을 사용했습니다. 하지만 `getReverseName`은 의도한 대로 동작하지 않습니다. `o.greetBackwards()`를 호출하는 시점에서 자바스크립트는 `this`를 의도한 대로 `o`에 연결하지만, `greetBackwards` 안에서 `getReverseName`을 호출하면 `this`는 `o`가 아닌 다른 것에 묶입니다. 이런 문제를 해결하기 위해 널리 사용하는 방법은 다른 변수에 `this`를 할당하는 것입니다.

```javascript
const o = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackward = '';
            for (let i = this.name.length-1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },
}
```
이 방법은 널리 쓰이는 방법이며, `this`를 `self`나 `that`에 할당하는 코드를 많이 보게 될 것입니다. 화살표 함수를 써도 이 문제를 해결할 수 있습니다. 

## 화살표 표기법
ES6에서 새로 만든 _화살표 표기법(arrow notation)_ 도 환영받는 문법입니다. 화살표 표기법은 간단히 말해 `function`이라는 단어와 중괄호 숫자를 줄이려고 고안된 단축 문법입니다. 중요한 차이가 하나 있는데, 곧 설명하겠습니다.

화살표 함수에는 세 가지 단축 문법이 있습니다.
- `function`을 생략해도 됩니다.
- 함수에 매개변수가 단 하나 뿐이라면 괄호(())도 생략할 수 있습니다.
- 함수 바디가 표현식 하나라면 중괄호와 `return`문도 생략할 수 있습니다.

화살표 함수는 항상 익명입니다. 화살표 함수도 변수에 할당할 수는 있지만, `function` 키워드처럼 이름 붙음 함수를 만들 수는 없습니다.

다음 예제의 표현식은 모두 동등한 한 쌍입니다.

```javascript
const f1 = function() { return 'Hello!'; }
// 또는
const f1 = () => 'Hello!';

const f2 = function(name) { return `Hello, ${name}!`; }
// 또는
const f2 = name => `Hello, ${name}!`;

const f3 = function(a, b) { return a + b; }
// 또는
const f3 = (a, b) => a + b;
```

화살표 함수에는 일반적인 함수와 중요한 차이가 있습니다. `this`가 다른 변수와 마찬가지로, _정적으로(lexially)_ 묶인다는 것입니다. 이 장에서 만들었던 `greetBackwards` 예제를 고쳐 써 봅시다. 화살표 함수를 사용하면 내부 함수 안에서 `this`를 사용할 수 있습니다.

```javascript
const o = {
    name: 'Julie',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackward = '';
            for (let i = this.name.length-1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },
}
```

출처 : 러닝 자바스크립트 6.5. This와 Arrow Notation