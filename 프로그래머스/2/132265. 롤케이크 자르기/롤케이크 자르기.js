function solution(topping) {    
    let count = 0;
    const leftSet = new Set();
    const rightMap = new Map();
    
    for (const top of topping) {
        rightMap.set(top, (rightMap.get(top) || 0) + 1);
    }
    
    for (const top of topping) {
        leftSet.add(top);
        
        rightMap.set(top, rightMap.get(top) - 1);
        if (rightMap.get(top) === 0) rightMap.delete(top);
        
        if (leftSet.size === rightMap.size) count++;
        
    }
    
    return count;
}