var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function() {
    return this.first + this.second
  }
}
// console.log(kim.sum(kim.first, kim.second));
console.log(kim.sum()); // this: 메소드가 속한 객체를 가리킴