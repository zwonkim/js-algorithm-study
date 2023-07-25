function solution(spell, dic) {
    var answer = 2;
    dic.forEach((ele) => {
        let spellLength = spell.length
        for (const spellStr of spell){
            if (ele.indexOf(spellStr) !== -1){
                spellLength -= 1
            }
        }
        if (spellLength === 0){
            answer = 1
            return false
        }
    })
    return answer;
}