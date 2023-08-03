function solution(A, B) {
  var answer = 0;
  const n = A.length;
  let string = A;

  let cnt = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (string === B) break;

    string = A[i] + string.substring(0, n - 1);

    cnt++;
    if (cnt >= n) return -1;
  }

  return cnt;
}
