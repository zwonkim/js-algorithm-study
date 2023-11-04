function solution(people, limit) {
    people.sort((a,b) => b - a);
    
    let left = 0;
    let right = people.length - 1;
    let answer = 0;
    
    while(left < right) {
        if(people[left] + people[right] > limit) {
            left++;
        } else {
          left++;
          right--;
        }
        answer++;
      }
    
    if(left == right) answer++;
    return answer;
}