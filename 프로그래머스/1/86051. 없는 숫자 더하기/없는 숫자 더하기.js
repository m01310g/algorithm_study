function solution(numbers) {
    const res = numbers.reduce((a, b) => a + b);
    
    return 45 - res;
}