function solution(x) {
    const xSum = x
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
    
    return x % xSum === 0 ? true : false;
}