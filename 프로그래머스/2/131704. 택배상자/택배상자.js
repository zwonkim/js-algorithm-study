function solution(order) {
    const stack = [];
    let index = 0;
    
    for(let i = 1; i < order.length + 1; i++) {
       stack.push(i);
        while(stack.length > 0 && order[index] === stack[stack.length - 1]) {
            stack.pop();
            index++;
        }
    }
    
    return index;
}