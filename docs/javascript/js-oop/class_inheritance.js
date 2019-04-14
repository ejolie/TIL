// Parent
class Person {
  // contructor
  // 1. 객체 생성 2. 객체 초기 상태 설정
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  // 객체의 프로토타입의 소속
  // Person을 통해 생성되는 모든 객체가 공유함
  sum() {
    return this.first + this.second;
  }
}

// Child
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }

  sum() {
    return super.sum() + this.third;
  }

  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());