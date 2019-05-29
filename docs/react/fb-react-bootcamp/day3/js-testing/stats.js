exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);

// - 방법 1
// exports.avg = (numbers) => {
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   return sum / numbers.length;
// };

// - 방법 2
// exports.avg = (numbers) => {
//   return numbers.reduce(
//     (acc, curr, idx, { length }) =>
//       idx === length - 1 ? (acc + curr) / length : acc + curr,
//     0
//   );
// };

// - 방법 3
exports.avg = (numbers) => {
  return numbers.reduce((acc, curr, idx, { length }) => (acc + curr) / length);
};

exports.sort = (numbers) => numbers.sort((a, b) => a - b);

// - 방법 1
// exports.median = (numbers) => {
//   const middle = Math.floor(numbers.length / 2);

//   if (numbers.length % 2) {
//     // 홀수
//     return numbers[middle];
//   }
//   // 짝수
//   return numbers[middle - 1] + numbers[middle] / 2;
// };

// - 방법 2
exports.median = (numbers) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};

exports.mode = (numbers) => {
  // const counts = new Map();
  // numbers.forEach((n) => {
  //   const count = counts.get(n) || 0;
  //   counts.set(n, count + 1);
  // });
  const counts = numbers.reduce(
    (acc, curr) => acc.set(curr, acc.get(curr) + 1 || 1),
    new Map()
  );

  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );

  if (modes.length === numbers.length) {
    // 최빈값이 없음
    return null;
  }

  if (modes.length > 1) {
    // 최빈값이 여러개
    return modes;
  }

  // 최빈값이 하나
  return modes[0];
};
