function solution(a, b, n) {
    let quotient = 0
    let remainder = 0
    
    let cnt = 0
    while(n >= 2) { 
        quotient = Math.floor(n / a) * b // 교환 가능한 콜라 갯수
        if(quotient === 0) break
        
        remainder = n % a // 교환 가능하고 남은 병
        cnt += quotient 
        n = quotient + remainder
    }
    
    return cnt
}