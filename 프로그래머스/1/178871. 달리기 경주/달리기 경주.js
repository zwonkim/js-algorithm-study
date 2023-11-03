function solution(players, callings) {
    const rank = Array(players.length).fill(0).map((_, i) => i)

    
    const obja = {}
    const objb = {}
    
    players.forEach((v, i) => {
        obja[v] = i
    })
    
    rank.forEach((v, i) => {
        objb[v] = players[i]
    })
    
    callings.forEach((v) => {
        const lp = objb[obja[v] - 1]
        const wp = objb[obja[v]]
        
        objb[obja[v] - 1] = wp
        objb[obja[v]] = lp
        
        obja[wp] = obja[wp] - 1
        obja[lp] = obja[lp] + 1
    })
    
    return Object.values(objb)
}