function solution(s) {
  var answer = 0;
  s = s.split(" ");
  const stack = [];

  s.forEach((n) => {
    if (n === "Z") {
      answer -= stack.pop();
    } else {
      answer += Number(n);
      stack.push(Number(n));
    }
  });

  return answer;
}
