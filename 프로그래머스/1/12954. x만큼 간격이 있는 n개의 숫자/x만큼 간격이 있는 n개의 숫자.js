function solution(x, n) {
    const arr = [x];
    
    for (let i = 1; i < n; i++) {
        arr.push(x * (i + 1));
    }
    
    return arr;
}