function solution(n) {
    var answer = 0;
    const num = n.toString(3).split("").reverse().join("");
    answer = parseInt(num, 3);
    return answer;
}