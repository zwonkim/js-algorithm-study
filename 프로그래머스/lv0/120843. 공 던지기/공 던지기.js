function solution(numbers, k) {
  var answer = 0;

  for (let cnt = 1; cnt < k; cnt++) {
    const [a, b] = numbers;

    numbers.shift();
    numbers.shift();

    numbers.push(a);
    numbers.push(b);
  }

  return (answer = numbers[0]);
}
