function solution(numbers) {
  const answer = [];  
  
  const LAST_IDX = numbers.length - 1
  const stack = [numbers[LAST_IDX]]
  answer[LAST_IDX] = -1
  
  for(let i = LAST_IDX - 1; i >= 0; i --) {
      if(stack.length === 0) answer[i] = -1
      if(numbers[i] >= numbers[i + 1]) {
          while(stack.length) {
              const pop = stack.pop()
              if(numbers[i] < pop) {
                  answer[i] = pop
                  stack.push(pop)
                  break
              } else if(stack.length === 0) answer[i] = -1
          }
            
      }
      if(numbers[i] < numbers[i + 1]) {
          answer[i] = numbers[i + 1]
          stack.push(numbers[i + 1])
      }
  }
    
  
  return answer;
}
