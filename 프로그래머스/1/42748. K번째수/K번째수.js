function solution(array, commands) {
    var answer = [];
    for (let a = 0; a < commands.length; a++) {
        const [i, j, k] = commands[a];
        const arr = array.slice(i - 1, j);
        arr.sort((a, b) => a - b);
        answer.push(arr[k - 1]);
    }
    return answer;
}