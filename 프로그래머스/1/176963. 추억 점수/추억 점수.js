function solution(name, yearning, photo) {
    let result = [];
    const hash = new Map();
    
    for(let i = 0; i < name.length; i++) {
        hash.set(name[i], yearning[i]);
    }
    
    for(let i = 0; i < photo.length; i++) {
        let sum = 0;
        photo[i].forEach((name) => {
            if(hash.get(name) !== undefined) {
                sum += hash.get(name);
            }
        })
        result.push(sum);
    }
    return result;
}