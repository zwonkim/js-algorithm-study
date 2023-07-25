function solution(spell, dic) {
  var answer = 2;
  let spellSum = 0;
  spell.forEach((w) => {
    spellSum += w.charCodeAt();
  });

  for (a of dic) {
    let dicSum = 0;
    for (b of a) {
      dicSum += b.charCodeAt();
    }
    if (spellSum === dicSum) answer = 1;
  }

  return answer;
}
