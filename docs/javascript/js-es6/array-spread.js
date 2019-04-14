// 2. spread operator - 배열의 복사, immutable array
let pre = ['apple', 'orange', 100];
let newData = [...pre];
console.log('pre', pre);
console.log('newData', newData);
console.log('pre === newData', pre === newData); // false

// 3. pread operator - 몇 가지 활용
let list1 = [100, 200, 300];
let list2 = [0, 1, 2, ...list1, 3, 4];
console.log('list1', list2);

function sum(a, b, c) {
  return a + b + c;
}
// = sum(list[0], list[1], list[2])
// 1) function.apply(context, array)
console.log('sum.apply(null, list1)', sum.apply(null, list1));

// 2) spread operator
console.log('sum(...list1)', sum(...list1));
