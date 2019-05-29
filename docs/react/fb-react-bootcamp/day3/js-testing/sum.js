function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  // let result = 0;
  // numbers.forEach((n) => (result += n));
  // - 리팩토링
  return numbers.reduce((acc, current) => acc + current, 0);
}

// module.exports = sum;
exports.sum = sum;
exports.sumOf = sumOf;
