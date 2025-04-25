const isValid = (s) => {
    const stack = [];

    for (let c of s) {
        if (c === "(" || c === "[" || c === "{") {
            stack.push(c);
        } else {
            const top = stack.pop();
            if ((c === ")" && top !== "(") || (c === "]" && top !== "[") || (c === "}" && top !== "{")) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let count = 0;
    const n = s.length;
    
    for (let i = 0; i < n; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isValid(rotated)) count++;
    }
    
    return count;
}