function solution(number, k) {
    var answer = '';
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        const curr = number[i];
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] < curr) {
            stack.pop();
            k--;
        }
        stack.push(curr);
    }
    
    answer = stack.slice(0, stack.length - k).join("");
    
    return answer;
}