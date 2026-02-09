function solution(k, tangerine) {
    var answer = 0;
    const countMap = new Map();
    for (const t of tangerine) countMap.set(t, (countMap.get(t) || 0) + 1);
    
    const counts = [...countMap.values()].sort((a, b) => b - a);
    
    let sum = 0;
    let types = 0;
    for (const c of counts) {
        sum += c;
        types++;
        if (sum >= k) break;
    }
    
    answer = types;
    return answer;
}