function solution(s) {
    const answer = s.length % 2 === 1 ? s.slice(s.length / 2, s.length / 2 + 1) : s.slice(s.length / 2 - 1, s.length / 2 + 1);
    return answer;
}