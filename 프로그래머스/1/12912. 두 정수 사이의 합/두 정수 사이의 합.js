function solution(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b)
    const arr = Array.from({ length: max - min + 1 }, (_, idx) => min + idx);
    
    return arr.reduce((a, b) => a + b);
}