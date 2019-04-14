function home() {
  const list = ['a', 'b', 'c'];
  list.push('banana');
  console.log(list);
}
home();

// const를 사용하더라도 배열과 객체의 값을 변경하는 것은 가능하다.
// const !== 불변
// const === 값의 재할당 불가능

// immutable array를 어떻게 만들지?
const list = ['a', 'b', 'c'];
const list2 = [].concat(list, 'banana');
console.log('list', list);
console.log('list2', list2);
console.log('list === list2', list === list2);

list2[3] = 'd'
console.log('list2', list2);