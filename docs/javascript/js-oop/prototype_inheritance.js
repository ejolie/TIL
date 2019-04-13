var superObj = { superVal: 'super' };
// 객체 간 상속 old ver. 1 (표준은 아님)
// var subObj = { subVal: 'sub' };
// subObj.__proto__ = superObj; 

// 객체 간 상속 old ver. 2 (표준)
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
// debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal);
console.log('superObj.superVal =>', superObj.superVal);

var kim = {
	name: 'kim',
	first: 10,
	second: 20,
	sum: function() {
		return this.first + this.second
	}
}

// old ver. 2
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
	return (this.first + this.second) / 2;
}

// old ver. 1
// var lee = {
// 	name: 'lee',
// 	first: 10,
// 	second: 10,
// 	avg: function() {
// 		return (this.first + this.second) / 2;
// 	}
// }
// lee.__proto__ = kim;

console.log('lee.sum():', lee.sum());
console.log('lee.avg():', lee.avg());
