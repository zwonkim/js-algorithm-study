function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => a - b);
    
    console.log(score)

  const numOfbox = Math.floor(score.length / m);

  if (score.length % m === 0) {
    for (let i = 0; i < numOfbox; i++) {
      answer += score[i * m] * m;
    }
  } else {
    for (let i = 0; i < numOfbox; i++) {
      answer += score[i * m + (score.length - m * numOfbox)] * m
    }
  }

  return answer;
}

