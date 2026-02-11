function solution(topping) {
    var answer = -1;
    const left = new Set();
    const right = new Map();
    let count = 0;
    
        
    for (const top of topping) {
        right.set(top, (right.get(top) || 0) + 1);
    }
    
    for (const top of topping) {
        left.add(top);
        right.set(top, right.get(top) - 1);
        
        if (right.get(top) === 0) right.delete(top);
        if (left.size === right.size) count++;
    }
    
    answer = count;
    
    return answer;
}