var superObj = { superVal: 'super' };
var subObj = { subVal: 'sub' };

subObj.__proto__ = superObj; // 객체 간 상속 old ver. (표준은 아님)
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal);
console.log('superObj.superVal =>', superObj.superVal);
