# 자바스크립트의 'This' 컨텍스트 이해하기

초보 프로그래머들은 자바스크립트 키워드 `this`와 씨름을 하곤 합니다. 하지만 `this` 컨텍스트를 이해하는 것은 보기보다 쉽습니다.

`This` 는  _함수가 어디서 호출되었는지_ 만 알면 됩니다.
초보 프로그래머들은 함수가 어디서 선언됐는지에 대해 자주 걱정을 합니다. 아마 그 함수는 특정 파일이나 특정 객체 안에서 선언되었을 것입니다.물론, 이것은 함수의 `this`를 바꿀 것이지요!

아닙니다.

`this`를 이해하기 위해 우리는 함수가 어디서 호출되었는지를 확인해야 합니다. 그 밖의 것은 중요하지 않습니다. 이후 우리가 잠시 다루게 될 한 가지의 예외 사항 빼고 말이죠.

먼저, 자바스크립트에서 `this`가 할당되는 다양한 방식을 살펴봅시다.

### 암시적 바인딩
암시적 바인딩은 함수 호출을 위해 마침표 표기법이 사용될 때 발생합니다.

예를 들어:

     var MyObject = function (){
       this.name = 'MyObjectName';
       this.myProperty = 'property';
     };

     MyObject.prototype.doStuff = function (action) {
       console.log(this.name + ' is ' + action + '!');
     }

     var obj = new MyObject();

     obj.doStuff('awesome'); // 출력: 'MyObjectName is awesome!'

암시적 바인딩에서는 **마침표 왼쪽에 위치한 것**이 그 함수의 `this` 컨텍스트가 됩니다.

### 명시적 바인딩
`this`의 명시적 바인딩은 [.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), [.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)이 함수에 사용될 때 발생합니다.

우리가 이것을 명시적 바인딩이라 부르는 이유는 당신이 명시적으로 `this` 컨텍스트를 call() 이나 apply()에 넘겨주기 때문입니다. bind()에 대해서는 잠시 후 다루겠습니다.

Here's how things look:

#### .call() & .apply()
.call()에는 매개변수와 함께 우리가 사용하고 싶은 `this` 컨텍스트를 넘겨줍니다.

`myFunc.call(thisContext, param1, param2, ... );`

예를 들어, 위에 선언된 객체를 사용해보면...

      var runner = { name: 'John', myFavoriteActivity: 'running' };
      MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity); // 출력: 'John is running!'

우리는 .call을 사용하기 때문에, 위 함수 호출에서 .call의 점 표기 전에 보이는 것을 무시해야 합니다. 우리는 MyObject의 메서드를 사용하고 있고 이것을 다른 `this` 컨텍스트, runner에서 호출하고 있습니다.

.apply()은 거의 비슷합니다. 우리의 `this` 컨텍스트 뒤에 매개변수의 배열을 넘겨야한다는 것을 제외하고 말이죠.

`myFunc.apply(thisContext, [param1, param2, ...]);`

> Note: .call() can take a series of parameters as well, but they're just separated by commas.

#### 디폴트 바인딩
Default binding refers to how `this` is the global context whenever a function is invoked without any of these other rules. If *we aren't using a dot* and *we aren't using call(), apply(), or bind()*, our `this` will be our global object.

Your global context depends on where you're working. If you're in the browser, `this` will be the `window`. When programming in [`strict mode`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), the global context is `undefined`.

For example while in Chrome:
    function printMe = function () {
      console.log(this);
    }
    printMe() // prints your 'Window Object' if in the browser!

#### Eyeballing `This`
You'll notice that none of these rules require too much work.

1. 마침표가 있나요? 왼쪽을 보세요. 그게 바로 `this`입니다.
2. .call() 이나 .apply()가 보이나요? 첫번째 쉼표 전에 전달된 것이 무엇인가요?What's passed in before the first comma? 그게 바로 `this`입니다.
3. 함수가 호출될 때 혼자 떨어져 있나요? 그럼 당신의 전역 컨텍스트는 무엇인가요? 그게 바로 `this`입니다.

These three rules-of-thumb point to the most important rule of all: `this` refers to a function's *callsite* (where it is invoked).

#### .bind() – 예외
불행히도, .bind()는 문제를 다소 복잡하게 만듭니다.

.bind()이 함수에 사용되면 `this` 컨텍스트를 설정하고 바인딩된 `this` 컨텍스트와 같은 이름을 가진 **새로운 함수**를 반환합니다.

예를 들어:

      var sayMyName = function () {
        console.log('My name is ' + this.name);
      };

      var jake = {
        name: 'Jake'
      }

      var sayMyName = sayMyName.bind(jake);
      sayMyName(); // 'My name is Jake'

이제, 우리가 sayMyName을 호출할 때마다 'jake' 컨텍스트를 가져오게 됩니다. `this`가 jake와 바인딩되었기 때문이죠.

bind가 지속적인 `this` 컨텍스트를 만들어내기 때문에, 우리는 이것을 찾아낼 수 없습니다. 우리는 뒤로 돌아가 어디서 `this`가 바인딩 되었는지를 찾아야 합니다.

** 콜백과 `this` **

Callbacks seem to introduce another layer of confusion to `this`, but they don't need to.

      var MyObject = function (){
        this.name = 'MyObjectName';
        this.myProperty = 'property';
      };

      MyObject.prototype.doStuff = function (action) {
        console.log(this.name + ' is ' + action + '!');
      }

      var obj = new MyObject();

      setTimeout(obj.doStuff, 1000, 'awesome'); // prints ' is awesome!' after a 1 second delay.
                       ^ Here's our callback!

If we run the above example, we'll see that this.name isn't defined. We only get `' is awesome!'` in our console.

Why? obj.doStuff has a dot! Isn't it implicitly bound?

When obj.doStuff is passed as the callback to setTimeout, *we don't invoke it*. So even though a function with a dot suggests implicit binding, this is not the function's *callsite*.

Instead, the callsite will be in setTimeout, when obj.doStuff is invoked after the delay. In this different context, this has no .name property.

We can fix our function by using .bind(), which we discussed above.

    var MyObject = function (){
      this.name = 'MyObjectName';
      this.myProperty = 'property';
    };

    MyObject.prototype.doStuff = function (action) {
      console.log(this.name + ' is ' + action + '!');
    }

    var obj = new MyObject();

    setTimeout(obj.doStuff.bind(obj), 1000, 'awesome'); // prints 'MyObjectName is awesome!' after a 1 second delay.

In this case, we are binding our callback to the `this` context of MyObject. When the callback is invoked later, we have carried the proper `this` context with it.

Our function now works properly.

In sum: When in doubt, **look at the callsite**!

출처 : https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262