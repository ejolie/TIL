// 1. array 순회하기 - for of
const data = [1, 2, undefined, NaN, null, ""];

// 1) for loop
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// 2) forEach
data.forEach(function(value) {
  console.log(value);
})

// 3) for in - 권장 X
for (let index in data) {
  console.log(data[index]);
}
// Problem: 원래 object type을 위한 것, 배열도 object이므로 되긴 함
// 자신이 갖고 있지 않은, 상위에 있는 추가된 값들까지 보여줄 수도 있음
Array.prototype.getIndex = function(){};
// 출력 결과 function() {} 나오는 문제 발생

// 4) for of - 배열
for (let value of data) {
  console.log(value);
}

// - 문자열
const str = "hello world!!!";
for (let value of str) {
  console.log(value);
}