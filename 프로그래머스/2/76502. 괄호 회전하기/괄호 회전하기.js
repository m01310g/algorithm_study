function solution(s) {
    let answer = 0;
    
    const isValid = (str) => {
        const stack = [];
        const pair = {
            ")": "(",
            "}": "{",
            "]": "["
        };
        
        for (const char of str) {
            if ("({[".includes(char)) stack.push(char);
            else {
                if (!stack.length || stack.pop() !== pair[char]) return false;
            }
        }
        return stack.length === 0;
    }
    
    for (let i = 0; i < s.length; i ++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isValid(rotated)) answer++;
    }
    return answer;
}