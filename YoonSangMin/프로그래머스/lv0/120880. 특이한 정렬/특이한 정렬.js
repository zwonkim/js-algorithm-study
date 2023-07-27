function solution(numlist, n) {
  var answer = [];
  const N = numlist.length;

  numlist.forEach((number) => {
    answer.push(number - n);
  });

  for (let i = 0; i < N; i++) {
    let min = 10000;
    let index = 0;

    for (let j = i; j < N; j++) {
      let b = answer[j];
      if (b < 0) b = b * -1;
      if (b === min) {
        if (answer[j] > answer[index]) index = j;
      } else if (b < min) {
        min = b;
        index = j;
      }
    }
    [answer[i], answer[index]] = [answer[index], answer[i]];
  }

  return answer.map((i) => i + n);
}
