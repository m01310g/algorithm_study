function solution(d, budget) {
    d.sort((a, b) => a - b);
    let sum = 0, count = 0;
    
    for (let i = 0; i < d.length; i++) {
        if (sum + d[i] > budget) break;
        sum += d[i];
        count++;
    }
    
    return count;
}