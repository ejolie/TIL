# JavaScript Array Reduce

출처: https://youtu.be/g1C40tDP0Bk



```javascript
const numbers = [1, -1, 2, 3];

// old version code
let sum = 0;
for (let n of numbers)
    sum += n;

// more elegant code using reduce
// array.reduce() : reduce array into a single value (number, string, object .. anything)
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = numbers.reduce((accumulator, currentValue) => { // sum, n
    return accumulator + currentValue;
}, 0); // initialize accumulator = 0

// shorter code
// set first value of array to accumulator
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = numbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);
```

