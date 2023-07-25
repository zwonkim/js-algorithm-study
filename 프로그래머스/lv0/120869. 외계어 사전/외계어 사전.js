function solution(spell, dic) {
  var answer = 2;
  dic.forEach((ele) => {
    let spellLength = spell.length;
    for (const spellStr of spell) {
      if (ele.indexOf(spellStr) !== -1) {
        spellLength -= 1;
      }
    }
    if (spellLength === 0) {
      answer = 1;
      return false;
    }
  });
  return answer;
}

```
'평균 시간: 0.107ms'
'평균 메모리: 33.433MB'
'최고 시간: 0.18ms'
'최저 시간: 0.06ms'
'최고 메모리: 33.5MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.025'
'메모리 표준 편차: 11.140'
```;

function solution(spell, dic) {
  var answer = 2;
  const compareSpell = spell.sort().join("");
  dic.forEach((dicSpell) => {
    if ([...dicSpell].sort().join("") === compareSpell) {
      answer = 1;
      return false;
    }
  });
  return answer;
}

```
'평균 시간: 0.087ms'
'평균 메모리: 33.511MB'
'최고 시간: 0.14ms'
'최저 시간: 0.05ms'
'최고 메모리: 33.6MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.018'
'메모리 표준 편차: 11.176'
```;

function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

```
'평균 시간: 0.064ms'
'평균 메모리: 33.456MB'
'최고 시간: 0.09ms'
'최저 시간: 0.05ms'
'최고 메모리: 33.6MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.017'
'메모리 표준 편차: 11.146'
```;
