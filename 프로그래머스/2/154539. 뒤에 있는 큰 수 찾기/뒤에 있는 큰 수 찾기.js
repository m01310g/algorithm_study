function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < numbers.length; i++) {
        const curr = numbers[i];
        
        while (numbers[stack[stack.length - 1]] < curr) {
            const top = stack.pop();
            answer[top] = curr;
        }
        
        stack.push(i);
    }
    
    return answer;
}