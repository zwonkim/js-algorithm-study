function solution(storey) {
    let cnt = 0
    
    while(storey) {
        const remainder = storey % 10
        
        if(remainder >= 6) {
            cnt += 10 - remainder
            storey += 10
        }
        
        else if(remainder <= 4) {
            cnt += remainder
        }
        
        else {
            if(Math.floor(storey / 10) % 10 > 4) {
                storey += 10
            }
            cnt += remainder
        }
        storey = Math.floor(storey / 10)
    }
    
    return cnt
    
}
