function solution(numbers) {
  const replaceToNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  replaceToNum.forEach((numString, num) => {
    numbers = numbers.replaceAll(numString, num);
  });

  return Number(numbers);
}

```
'평균 시간: 0.070ms'
'평균 메모리: 33.433MB'
'최고 시간: 0.09ms'
'최저 시간: 0.05ms'
'최고 메모리: 33.5MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.027'
'메모리 표준 편차: 11.172'
```;

function solution(numbers) {
  const answer = numbers
    .replaceAll("one", 1)
    .replaceAll("two", 2)
    .replaceAll("three", 3)
    .replaceAll("four", 4)
    .replaceAll("five", 5)
    .replaceAll("six", 6)
    .replaceAll("seven", 7)
    .replaceAll("eight", 8)
    .replaceAll("nine", 9)
    .replaceAll("zero", 0);

  return Number(answer);
}
```
'평균 시간: 0.040ms'
'평균 메모리: 33.456MB'
'최고 시간: 0.04ms'
'최저 시간: 0.04ms'
'최고 메모리: 33.5MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.013'
'메모리 표준 편차: 11.140'

```;
