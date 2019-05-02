2019년 5월 2일 목요일

# You Don't Know JS: *this* & Object Prototypes

# Chapter 2: `this` All Makes Sense Now!

## Call-site

`this` 바인딩을 이해하기 위해서는 call-site를 이해해야 한다. call-site는 **(함수가 선언된 위치가 아니라) 함수가 코드 상에서 호출된 위치**를 말한다. 

call-site를 찾기 위해 중요한 것은 **콜 스택(call-stack)** 에 대해 생각해보는 것이다.

콜 스택과 call-site에 대해 알아보자.

```js
function baz() {
    // call-stack: `baz`
    // 따라서, call-site: in 전역 스코프
    
    console.log("baz");
    bar(); // <-- `bar`의 call-site
}

function bar() {
    // call-stack: `baz` -> `bar`
    // 따라서, call-site: in `baz`
    
	console.log("bar");
    foo(); // <-- `foo`의 call-site
}

function foo() {
    // call-stack: `baz` -> `bar` -> `foo`
    // 따라서, call-site: in `bar`
    
    console.log("foo");
}

baz(); // <-- `baz`의 call-site 
```





## Nothing But Rules

### Default Binding



### Implicit Binding



## Everything In Order



### Determining `this`



## Binding Exceptions



### Ignored `this`



## Lexical `this`



## Review





출처 : [https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md](https://github.com/getify/You-Dont-Know-JS/blob/master/this %26 object prototypes/ch2.md)