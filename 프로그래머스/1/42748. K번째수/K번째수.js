function solution(array, commands) {
    var answer = [];
    
    for (let x = 0; x < commands.length; x++) {
        const [i, j, k] = commands[x];
        const result = array.slice(i - 1, j);
        result.sort((a, b) => a - b);
        answer.push(result[k - 1]);
    }

    return answer;
}