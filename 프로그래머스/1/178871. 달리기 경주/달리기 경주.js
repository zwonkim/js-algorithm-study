function solution(players, callings) {
   const hash = new Map();
   
   players.forEach((name, index) => {
       hash.set(name, index);
   } )
    
    callings.forEach((name) => {
        const currentIdx = hash.get(name);
        const front = players[currentIdx - 1];
        
         [players[currentIdx], players[currentIdx -1]] = [players[currentIdx -1], players[currentIdx]];
        
        hash.set(name, hash.get(name) - 1);
        hash.set(front, hash.get(name) + 1);
    })
    return players;
}