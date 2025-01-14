function solution(k, m, score) {
    if (score.length < m) {
        return 0;
    }
    let answer = 0;
    score.sort((a, b) => b - a);
    for (let i = 0; i <= score.length - m; i += m) {
        const box = score.slice(i, i + m);
        answer += Math.min(...box) * m;
    }
    return answer;
}
