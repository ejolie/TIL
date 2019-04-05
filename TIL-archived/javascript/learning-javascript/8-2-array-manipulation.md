# 8.2 배열 요소 조작
배열 메서드 중 일부는 배열 '자체를' 수정하며, 다른 일부는 새 배열을 반환합니다. 예를 들어 `push`는 배열 자체를 수정하며, `concat`은 새 배열을 반환합니다.

### 8.2.1 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기
배열의 _처음_ 은 첫 번째 요소, 즉 인덱스가 0인 요소를 말합니다. 마찬가지로 배열의 _끝_ 은 인덱스가 가장 큰 요소, 즉 배열이 `arr`이라면 `arr.length - 1`인 요소를 말합니다. `push`와 `pop`은 각각 배열의 끝에 요소를 추가하거나 제거합니다. (수정) `shift`와 `unshift`는 각각 배열의 앞에 요소를 추가하거나 제거합니다.(수정)

__(수정)__ 배열 자체를 수정한다는 뜻입니다. 
__(사본)__ 원래 배열은 바뀌지 않고 변경된 내용을 반영한 새 배열을 반환한다는 뜻입니다.

__NOTE__ `push`와 `pop`은 데이터를 수직으로 쌓아 올리는 _스택(stack)_ 에 해당하는 행동입니다. `shift`와 `unshift`는 대기열과 비슷한 _큐(queue)_ 에 해당하는 행동입니다.

`push`와 `unshift`는 새 요소를 추가해서 늘어난 길이를 반환하고, `pop`과 `shift`는 제거된 요소를 반환합니다.

```javascript
const arr = ['b', 'c', 'd'];
arr.push('e');      // 4 반환. arr = ['b', 'c', 'd', 'e']
arr.pop();          // 'e' 반환. arr = ['b', 'c', 'd']
arr.unshift('a');   // 4 반환. arr = ['a', 'b', 'c', 'd']
arr.shift();        // 'a' 반환. arr = ['b', 'c', 'd']
```

### 8.2.2 배열의 끝에 여러 요소 추가하기
`concat` 메서드는 배열의 끝에 여러 요소를 추가한 사본을 반환합니다. concat에 배열을 넘기면 이 메서드는 배열을 분해해서 원래 배열에 추가한 사본을 반환합니다.

```javascript
const arr = [1, 2, 3];
arr.concat(4, 5, 6);    // [1, 2, 3, 4, 5, 6] 반환.
arr.concat([4, 5, 6]);    // [1, 2, 3, 4, 5, 6] 반환.
arr.concat([4, 5], 6);    // [1, 2, 3, 4, 5, 6] 반환.
arr.concat([4, [5, 6]]);    // [1, 2, 3, 4, [5, 6]] 반환.
```

### 8.2.3 배열 일부 가져오기
배열의 일부만 가져올 때는 `slice` 메서드를 사용합니다. `slice` 메서드는 매개변수 두 개를 받습니다. 

첫 번째 매개변수는 어디서부터 가져올지를, 두 번째 매개변수는 어디까지 가져올지를 (바로 앞 인덱스까지 가져옵니다) 지정합니다. 두 번째 매개변수를 생략하면 배열의 마지막까지 반환합니다. 이 메서드에서는 음수 인덱스를 쓸 수 있고, 음수 인덱스를 쓰면 배열의 끝에서부터 요소를 셉니다.

```javascript
const arr = [1, 2, 3, 4, 5]
arr.slice(3);       // [4, 5] 반환
arr.slice(2, 4);    // [3, 4] 반환
arr.slice(-2);      // [4, 5] 반환
arr.slice(1, -2);   // [2, 3] 반환
arr.slice(-2, -1);  // [4] 반환
```

### 8.2.4 임의의 위치에 요소 추가하거나 제거하기
`splice`는 배열을 자유롭게 수정할 수 있습니다. 

- 첫 번째 매개변수: 수정을 시작할 인덱스
- 두 번째 매개변수: 제거할 요소 숫자, 아무 요소도 제거하지 않을 때는 `0`을 넘깁니다.
- 나머지 매개변수: 배열에 추가될 요소입니다.

```javascript
const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4);
// [] 반환. arr = [1, 2, 3, 4, 5, 7]

arr.splice(5, 0, 6);
// [] 반환. arr = [1, 2, 3, 4, 5, 6, 7]

arr.splice(1, 2);
// [2, 3] 반환. arr = [1, 4, 5, 6, 7]

arr.splice(2, 1, 'a', 'b')
// [5] 반환. arr = [1, 4, 'a', 'b', 6, 7]
```

### 8.2.5 배열 안에서 요소 교체하기
`copyWithin`은 ES6에서 도입한 새 메서드입니다. 이 메서드는 배열 요소를 복사해서 다른 위치에 붙여넣고, 기존의 요소를 덮어씁니다. 

- 첫 번째 매개변수: 복사한 요소를 붙여넣을 위치
- 두 번째 매개변수: 복사를 시작할 위치
- 세 번째 매개변수: 복사를 끝낼 위치, 생략 가능합니다.

`slice`와 마찬가지로, 음수 인덱스를 사용하면 배열의 끝에서부터 셉니다.

```javascript
const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2);       // arr = [1, 3, 4, 4]
arr.copyWithin(2, 0, 2);    // arr = [1, 3, 1, 3]
arr.copyWithin(0, -3, -1);  // arr = [3, 1, 1, 3]
```

### 8.2.6 특정 값으로 배열 채우기
ES6에서 도입한 새 메서드 `fill`은 환영할만한 좋은 메서드입니다. 이 메서드는 정해진 값으로 배열을 채웁니다. 크기를 지정해서 배열을 생성하는 `Array` 생성자와 잘 어울립니다.

배열의 일부만 채우려 할 때는 시작 인덱스와 끝 인덱스를 지정하면 됩니다. 음수 인덱스도 사용할 수 있습니다.

```javascript
const arr = new Array(5).fill(1);
// arr = [1, 1, 1, 1, 1] 로 초기화

arr.fill('a');
// arr = ['a', 'a', 'a', 'a', 'a']

arr.fill('b', 1);
// arr = ['a', 'b', 'b', 'b', 'b']

arr.fill('c', 2, 4);
// arr = ['a', 'b', 'c', 'c', 'b']

arr.fill(5.5, -4);
// arr = ['a', 5.5, 5.5, 5.5, 5.5]

arr.fill(0, -3, -1);
// arr = ['a', 5.5, 0, 0, 5.5]
```

### 8.2.7 배열 정렬과 역순 정렬
`reverse`는 이름 그대로 배열 요소의 순서를 반대로 바꿉니다(수정).

```javascript
const arr = [1, 2, 3, 4, 5];
arr.reverse()   // arr = [5, 4, 3, 2, 1]
```

`sort`는 배열 요소의 순서를 정렬합니다.

```javascript
const arr = [5, 3, 2, 4, 1];
arr.sort();     // arr = [1, 2, 3, 4, 5]
```

`sort`는 _정렬 함수_ 를 받을 수 있습니다. 이 기능은 매우 편리합니다. 예를 들어 일반적으로는 객체가 들어있는 배열을 정렬할 수 없지만, 정렬 함수를 사용하면 가능합니다.

```javascript
const arr = [
    { name: 'Suzanne' },
    { name: 'Jim' },
    { name: 'Trevor' },
    { name: 'Amanda' },
];
arr.sort();
// arr은 바뀌지 않습니다.

arr.sort((a, b) => a.name > b.name);
// arr은 name 프로퍼티의 알파벳 순으로 정렬됩니다.

arr.sort((a, b) => a.name[1] < b.name[2]);
// arr은 name 프로퍼티의 두 번째 글자의 알파벳 역순으로 정렬됩니다.
```


## 8.3 배열 검색
배열 안에서 뭔가 찾으려 할 때는 몇 가지 방법이 있습니다. 우선 `indexOf`는 찾고자 하는 것과 정확히 일치(===)하는 첫 번째 요소의 인덱스를 반환합니다. `indexOf`의 짝인 `lastIndexOf`는 배열의 끝에서부터 검색합니다. 배열의 일부분만 검색하려면 시작 인덱스를 지정할 수 있습니다. `indexOf`와 `lastIndexOf`는 일치하는 것을 찾이 못하면 -1을 반환합니다.

```javascript
const o = { name: 'Jerry' };
const arr = [1, 5, 'a', o, true, 5, [1, 2], '9'];

arr.indexOf(5);         // 1
arr.lastIndexOf(5);     // 5

arr.indexOf('a');       // 2
arr.lastIndexOf('a');   // 2
```

`findIndex`는 일치하는 것을 찾지 못했을 때 -1을 반환한다는 점에서는 `indexOf`와 비슷하지만, 보조 함수를 써서 검색 조건을 지정할 수 있으므로 `indexOf`보다 더 다양한 상황에서 활용할 수 있습니다. 하지만 `findIndex`는 검색을 시작할 인덱스를 지정할 수 없고, 뒤에서부터 찾는 `findLastIndex` 같은 짝도 없습니다.

```javascript
const arr = [
    { id: 5, name: 'Judith' },
    { id: 7, name: 'Francis' },
]

arr.findIndex(o => o.id === 5);     // 0
arr.findIndex(o => o.name === 'Francis');   // 0
```

`indexOf`와 `findIndex`는 조건에 맞는 요소의 인덱스를 찾을 때 알맞지만, 조건에 맞는 요소의 인덱스가 아니라 요소 자체를 원할 때는 `find`를 사용합니다. `find`는 `findIndex`와 마찬가지로 검색 조건을 함수로 전달할 수 있습니다. 조건에 맞는 요소가 없을 때는 `undefined`를 반환합니다.

```javascript
const arr = [
    { id: 5, name: 'Judith' },
    { id: 7, name: 'Francis' },
]

arr.find(o => o.id === 5);  // Object { id: 5, name: 'Judith' }
arr.find(o => o.id === 2);  // undefined
```

`find`와 `findIndex`에 전달하는 함수는 배열의 각 요소를 첫 번째 매개변수로 받고, 현재 요소의 인덱스와 배열 자체도 매개변수로 받습니다. 이런 점을 다양하게 응용할 수 있습니다. 예를 들어, 특정 인덱스보다 뒤에 있는 제곱수를 찾아야 한다고 합시다.

```javascript
const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); // 4
```

`find`와 `findIndex`에 전달하는 함수의 `this`도 수정할 수 있습니다. 이를 이용해서 함수가 객체의 메서드인 것처럼 호출할 수 있습니다. ID를 조건으로 `Person` 객체를 검색하는 예제를 보십시오. 두 방법의 결과는 같습니다.

```javascript
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;

const jamie = new Person('Jamie'),
    juliet = new Person('Juliet'),
    peter = new Person('Peter'),
    jay = new Person('Jay'),
const arr = [jamie, juliet, peter, jay];

// 옵션 1 : ID를 직접 비교하는 방법
arr.find(p => p.id === juliet.id);  // juliet Object

// 옵션 2 : 'this' 매개변수를 이용하는 방법
arr.find(function (p) {
    return p.id === this.id
}, juliet);                         // juliet Object
```

이렇게 간단한 예제에서는 `find`와 `findIndex`에서 `this` 값을 바꾸는 의미가 별로 없지만, 나중에 이 방법이 더 유용하게 쓰이는 경우를 보게 될 겁니다.

간혹 조건을 만족하는 요소의 인덱스도, 요소 자체도 필요 없고, 조건을 만족하는 요소가 있는지 없는지만 알면 충분할 때가 있습니다. 물론 앞에서 설명한 함수를 사용하고 -1이나 `null`이 반환되는지 확인해도 되지만, 자바스크립트에는 이럴 때 쓰라고 만든 `some`과 `every` 메서드가 있습니다.

`some`은 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 `true`를 반환하며, 조건에 맞는 요소를 찾지 못하면 `false`를 반환합니다.

```javascript
const arr = [5, 12, 7, 9, 15];

arr.some(x => x % 2 === 0);  
// true; 12는 짝수입니다.

arr.some(x => Number.isInteger(Math.aqrt(x)));
// false; 제곱수가 없습니다.
```

`every`는 