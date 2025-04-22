function solution(s) {
    var answer = '';
    
    const arr = s.split(" ").map(Number);
    
    answer = `${Math.min(...arr)} ${Math.max(...arr)}`
    return answer;
}