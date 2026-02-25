function solution(numbers) {
    var answer = '';
    const arr = numbers.map((v) => String(v));
    arr.sort((a, b) => {
        if (a + b > b + a) return -1;
        else if (b + a > a + b) return 1;
        else return 0;
    })
    
    answer = arr.join("");

    return answer.startsWith("0") ? Number(answer).toString() : answer;
}