function solution(skill, skill_trees) {
    skill = [...skill]
    let cnt = skill_trees.length
    
    for(let i = 0; i < skill_trees.length; i++) {
        const stack = []
        for(let j = 0; j < skill_trees[i].length; j++) {
            if(skill.includes(skill_trees[i][j])) {
                stack.push(skill_trees[i][j])
            }
        }
        
        for(let j = 0; j < stack.length; j++) {
            if(stack[j] !== skill[j]) {
                cnt--
                break
            }
        }
    }
    
    return cnt
    
}