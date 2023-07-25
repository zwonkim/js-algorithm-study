function solution(lines) {
  var answer 

  const check = Array.from(Array(201), () => 0);

  for (let x of lines) {
    const st = x[0];
    const ed = x[1];

    for (let i = st; i < ed; i++) {
      check[i + 100] += 1;
    }
  }

  return (answer = check.filter((i) => i > 1).length);
}
