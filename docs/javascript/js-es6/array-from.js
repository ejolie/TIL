// 4. from 메서드로 진짜 배열 만들기
function addMark() {
  // method 1. for loop 이용
  let newData = [];
  for (let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }
  console.log(newData);

  // method 2. 예전 방식 - map 이용
  var slice = Array.prototype.slice;
  var newData2 = slice.call(arguments).map(function(value) {
    return value + '!';
  })

  // method 3. ES6 - map 이용
  // 주의: arguments는 배열과 유사하지만 진짜 배열이 아님
  let newArguments = Array.from(arguments); // 진짜 배열로 변환
  let newData3 = newArguments.map(function(value) {
    return value + "!";
  });
  console.log(newData3);
}

addMark(1, 2, 3, 4, 5);