function solution(a, b, n) {
    var answer = 0;
    let total = n;
    
    while (total >= a) {
        const result = Math.floor(total / a);
        const newCola = result * b;
        answer += newCola;
        const r = total % a;
        total = newCola + r;
    }
    
    return answer;
}