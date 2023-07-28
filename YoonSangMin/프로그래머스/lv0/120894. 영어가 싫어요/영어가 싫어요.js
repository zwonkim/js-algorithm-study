function solution(numbers) {
    var answer = ""
    
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    let sum = ""
    for(x of numbers) {
        sum+= x
        if(arr.indexOf(sum) >= 0) {
            answer += arr.indexOf(sum)
            sum = ""
        }
}   
    return Number(answer);
}