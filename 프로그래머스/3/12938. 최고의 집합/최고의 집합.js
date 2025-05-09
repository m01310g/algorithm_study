function solution(n, s) {
    if (s < n) return [-1];
    
    const quotient = Math.floor(s / n);
    const remainder = s % n;
    
    const result = Array(n).fill(quotient);
    
    for (let i = 0; i < remainder; i++) {
        result[i]++;
    }
    
    return result.sort((a, b) => a - b);
}