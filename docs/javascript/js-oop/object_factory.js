// var kim = {
//   name: 'kim',
//   first: 10,
//   second: 20,
//   sum: function() {
//     return this.first + this.second
//   }
// }

// var lee = {
//   name: 'lee',
//   first: 10,
//   second: 10,
//   sum: function() {
//     return this.first + this.second
//   }
// }

// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());

var d1 = new Date('2019-4-10');
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());
console.log("d1.getDate()", d1.getDate());
console.log("Date", Date);

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function() {
    return this.first + this.second + this.third;
  }
}
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

console.log("Person()", Person()); // 그냥 함수
console.log("new Person()", new Person()); // 객체 생성자(contructor)