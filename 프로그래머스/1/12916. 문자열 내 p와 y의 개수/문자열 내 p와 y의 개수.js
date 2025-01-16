function solution(s) {
    const pCount = (s.match(/p/gi) || []).length;
    const yCount = (s.match(/y/gi) || []).length;
    const answer = pCount === yCount;
    return answer;
}

