// const solutionEasy = (numbers) => {
//   let acc = 0;

//   numbers.forEach((cur) => {
//     acc += cur;
//   });

//   return acc;
// };

// const solutionRecursive = (numbers) => {
//   if (numbers.length === 0) {
//     return 0;
//   }

//   return numbers.pop() + solutionRecursive(numbers);
// };

// const solutionLoop = (numbers) => {
//   let acc = 0;

//   while (true) {
//     if (numbers.length === 0) {
//       break;
//     }

//     acc += numbers.pop();
//   }

//   return acc;
// };

const solution = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

test('빈 배열은 0을 반환한다', () => {
  expect(solution([])).toBe(0);
});

test('배열의 합을 반환한다', () => {
  expect(solution([1, 2, 3, 4])).toBe(10);
  expect(solution([-1, 3, 8, 9, 10, 11])).toBe(40);
});

test('큰 배열이 입력으로 주어져도 RangeError를 던지지 않는다', () => {
  const input = Array.from({ length: 10000 }, (_, i) => i + 1);

  expect(() => solution(input)).not.toThrowError(
    new RangeError('Maximum call stack size exceeded'),
  );
});
