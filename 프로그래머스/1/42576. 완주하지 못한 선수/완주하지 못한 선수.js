function solution(participant, completion) {
    var answer = '';
    const pMap = {};
    
    for (const p of participant) {
        pMap[p] = (pMap[p] || 0) + 1;
    }
    
    for (const c of completion) {
        pMap[c] -= 1;
    }
    
    for (const p in pMap) {
        if (pMap[p] > 0) answer = p;
    }
    
    return answer;
}