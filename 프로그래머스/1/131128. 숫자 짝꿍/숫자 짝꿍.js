function solution(X, Y) {
    const xArr = X.split('');
    const yArr = Y.split('');
    
    let answer='';
 
     for(let i = 0 ; i < 10 ; i ++) {
        const curX = xArr.filter(num => Number(num) === i).length;
        const curY = yArr.filter(num => Number(num) === i).length;
        answer += String(i).repeat(Math.min(curX, curY));
    }
    
    if(answer === '') return "-1"
    if(Number(answer) === 0) return "0"
    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("")
}