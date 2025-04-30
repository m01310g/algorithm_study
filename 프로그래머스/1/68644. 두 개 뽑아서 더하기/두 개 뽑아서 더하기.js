function solution(numbers) {
    const result = [];
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j]);
        }
    }
    
    const answer = Array.from(new Set(result));
    
    return answer.sort((a, b) => a - b);
}