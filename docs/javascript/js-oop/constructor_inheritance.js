// class_inheritance.js와 비교하기
// Parent
function Person(name, first, second) {
	this.name = name;
	this.first = first;
	this.second = second;
}

Person.prototype.sum = function() {
	return this.first + this.second;
}

// Child
function PersonPlus(name, first, second, third) {
	// call : this에 PersonPlus를 넘겨준다.
	// = super(name, first, second)
	Person.call(PersonPlus, name, first, second);
	this.third = third;
}

// PersonPlus.prototype.avg = function() {
// 	return (this.first + this.second + this.third) / 3;
// }

// = PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function() {
	return (this.first + this.second + this.third) / 3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor", kim.constructor);