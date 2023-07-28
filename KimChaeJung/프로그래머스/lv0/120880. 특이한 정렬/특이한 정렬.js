function solution(numlist, n) {
  const sortedList = numlist
    .map((ele) => ele - n)
    .sort((a, b) => {
      const A = Math.abs(a);
      const B = Math.abs(b);
      return A < B ? -1 : A > B ? 1 : a < 0 ? 1 : -1;
    });
  return sortedList.map((ele) => ele + n);
}

// 우수 코드
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
