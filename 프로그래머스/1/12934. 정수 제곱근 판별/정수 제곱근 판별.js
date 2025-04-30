function solution(n) {
    const res = Math.sqrt(n);
    
    return Number.isInteger(res) ? Math.pow(res + 1, 2) : -1;
}