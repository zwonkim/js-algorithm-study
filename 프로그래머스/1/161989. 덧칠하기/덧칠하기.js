function solution(n, m, section) {    
   let answer = 0;
   let current = 0;
    
    section.forEach((num) => {
        if(num > current) {
            current = num + m - 1;
            answer++;
        }
    })
    
    return answer;
}