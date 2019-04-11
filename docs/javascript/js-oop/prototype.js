function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  // 생성자 안 메소드: 비효율! 호출 시 매번 메소드를 생성한다.
}

Person.prototype.sum = function() {
  return 'prototype: ' + (this.first + this.second);
}

var kim = new Person('kim', 10, 20);
// kim.sum = function() {
//   return 'modified: ' + (this.first + this.second)
// }
kim.sum = function() {
  return 'this: ' + (this.first + this.second);
}

var lee = new Person('lee', 10, 10);
// lee.sum = function() {
//   return 'modified: ' + (this.first + this.second)
// }

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());