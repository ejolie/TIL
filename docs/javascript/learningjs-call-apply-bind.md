2018년 1월 29일 화요일

# call과 apply, bind

자바스크립트에서는 일반적인 방법 외에도, 함수를 어디서, 어떻게 호출했느냐와 관계없이 `this`가 무엇인지 지정할 수 있습니다. 먼저 `call` 메서드부터 시작합시다.

## call

`call` 메서드는 모든 함수에서 사용할 수 있으며, `this`를 특정 값으로 지정할 수 있습니다.

```javascript
const bruce = { name: 'Bruce' };
const madeline = { name: 'Madeline' };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
    return `Hello, I'm ${this.name}!`;
}

greet();    
// "Hello, I'm undefined!" - this는 어디에도 묶이지 않았습니다.

greet.call(bruce);
// "Hello, I'm Bruce!" - this는 bruce입니다.

greet.call(madeline);
// "Hello, I'm Madeline!" - this는 madeline입니다.
```

함수를 호출하면서 `call`을 사용하고 `this`로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있습니다. `call`의 첫 번째 매개변수는 `this`로 사용할 값이고, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달됩니다.

```javascript
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
/* bruce는 이제 { name: 'Bruce', birthYear: 1949,
                occupation: 'singer'} 입니다. */

update.call(madeline, 1942, 'actress');
/* madeline는 이제 { name: 'Madeline', birthYear: 1942,
                    occupation: 'actress'} 입니다. */
```

## apply
`apply`는 함수 매개변수를 처리하는 방법을 제외하면 `call`과 같습니다. `call`은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, `apply`는 매개변수를 배열로 받습니다.

```javascript
update.apply(bruce, [1955, 'actor']);
update.apply(madeline, [1918, 'writer']);
```

`apply`는 배열 요소를 함수 매개변수로 사용해야 할 때 유용합니다. `apply`를 설명할 때 흔히 사용하는 예제는 배열의 최솟값과 최댓값을 구하는 것입니다. 자바스크립트의 내장 함수인 `Math.min`과 `Math.max`는 매개변수를 받아 그중 최솟값과 최댓값을 각각 반환합니다. `apply`를 사용하면 기존 배열을 이들 함수에 바로 넘길 수 있습니다.

```javascript
const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr);  // -5
Math.max.apply(null, arr);  // 15
```

`this`의 값에 `null`을 쓴 이유는 `Math.min`과 `Math.max`가 `this`와 관계없이 동작하기 때문입니다. 즉, 무엇을 넘기든 관계없습니다.

ES6의 확산 연산자(`...`)를 사용해도 `apply`와 같은 결과를 얻을 수 있습니다. `update` 메서드는 `this` 값이 중요하므로 `call`을 사용해야 하지만, `Math.min`과 `Math.max`는 `this`값이 무엇이든 관계없으므로 확산 연산자를 그대로 사용할 수 있습니다.

```javascript
const newBruce = [1940, 'martial artist'];
update.call(bruce, ...newBruce); // apply(bruce, newBruce)와 같습니다.
Math.min(...arr);  // -5
Math.max(...arr);  // 15
```

## bind
`this`의 값을 바꿀 수 있는 마지막 함수는 `bind`입니다. `bind`를 사용하면 함수의 `this`값을 영구히 바꿀 수 있습니다. `update` 메서드를 이리저리 옮기면서도 호출할 때 `this` 값은 _항상_ `bruce`가 되게끔, `call`이나 `apply`, 다른 `bind`와 함께 호출하더라도 `this`값이 `bruce`가 되도록 하려면 `bind`를 사용합니다.

```javascript
const updateBruce = update.bind(bruce);

updateBruce(1904, 'actor')
/* bruce는 이제 { name: 'Bruce', birthYear: 1904,
                occupation: 'actor'} 입니다. */

updateBruce.call(madeline, 1274, 'king');
/* bruce는 이제 { name: 'Bruce', birthYear: 1274,
                occupation: 'king'} 입니다. 
   madeline은 변하지 않습니다. */
```

`bind`는 함수의 동작을 영구적으로 바꾸므로 찾기 어려운 버그의 원인이 될 수 있습니다. `bind`를 사용한 함수는 `call`이나 `apply`, 다른 `bind`와 함께 사용할 수 없는 거나 마찬가지입니다. 

함수를 여기저기서 `call`이나 `apply`로 호출해야 하는데, `this` 값이 그에 맞춰 바뀌어야 하는 경우를 상상해 보십시오. 이럴 때는 `bind`를 사용하면 문제가 생깁니다. `bind`는 매우 유용하지만, 함수의 `this`가 어디에 묶이는지 정확히 파악하고 사용해야 합니다.

`bind`에 매개변수를 넘기면 항상 그 매개변수를 받으면서 호출되는 새 함수를 만드는 효과가 있습니다. 예를 들어 `bruce`가 태어난 해를 항상 1949로 고정하지만, 직업은 자유롭게 바꿀 수 있는 업데이트 함수를 만들고 싶다면 다음과 같이 하면 됩니다.

```javascript
const updateBruce1949 = update.bind(bruce, 1949);
```

출처 : 러닝 자바스크립트 6.8. call과 apply, bind
