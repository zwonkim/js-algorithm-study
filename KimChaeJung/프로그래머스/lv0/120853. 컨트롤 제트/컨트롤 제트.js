function solution(s) {
    const array = s.split(' ')
    const stack = []
    for (const ele of array) {
        if (ele === 'Z'){
            stack.pop()
        } else {
            stack.push(ele)
        }
    }
    return stack.reduce((a, b) =>  a + parseInt(b), 0)
}