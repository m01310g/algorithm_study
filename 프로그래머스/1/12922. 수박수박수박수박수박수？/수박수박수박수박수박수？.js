function solution(n) {
    const pattern = "수박";
    
    return n % 2 === 0 ? pattern.repeat(n / 2) : pattern.repeat(Math.floor(n / 2)) + "수";
}