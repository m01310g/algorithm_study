function solution(k, tangerine) {
    const countMap = {};
    
    for (let size of tangerine) {
        countMap[size] = (countMap[size] || 0) + 1;
    }
    
    const counts = Object.values(countMap).sort((a, b) => b - a);
    
    let total = 0;
    let kind = 0;
    
    for (let c of counts) {
        total +=  c;
        kind++;
        
        if (total >= k) break;
    }
    
    return kind;
}