function solution(s) {
    var answer = '';
    const arr = s.split(" ");
    const maxNum = Math.max(...arr);
    const minNum = Math.min(...arr);
    
    answer = [minNum, maxNum].join(" ");
    return answer;
}