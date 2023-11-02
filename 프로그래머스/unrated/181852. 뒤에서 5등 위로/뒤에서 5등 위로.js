function solution(num_list) {
    num_list.sort((a, b) => {
        return a - b
    })
    return num_list.slice(5);
}