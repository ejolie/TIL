var kim = {
	name: 'kim',
	first: 10,
	second: 20
}

var lee = {
	name: 'lee',
	first: 10,
	second: 10
}

function sum(prefix) {
	return prefix + (this.first + this.second);
}

// call : 실행할 때 this 값을 바꾸며 실행
// ~= apply
console.log('sum.call(kim)', sum.call(kim, '=> '));
console.log('sum.call(lee)', sum.call(lee, ': '));

// bind : 아예 this를 영구적으로 고정시키는 새로운 함수 생성
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());
