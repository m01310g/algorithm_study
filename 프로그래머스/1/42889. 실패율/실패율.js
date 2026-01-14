function solution(N, stages) {
    var answer = [];
    const count = stages.reduce((acc, curr) => {
        if (curr <= N) acc[curr]++;
        return acc;
    }, Array(N + 2).fill(0));
    
    let remaining = stages.length;
    const failure = [];
    for (let i = 1; i <= N; i++) {
        const fail = remaining === 0 ? 0 : count[i] / remaining;
        failure.push([i, fail]);
        remaining -= count[i];
    }
    
    failure.sort((a, b) => b[1] - a[1] || a[0] - b[0])
    answer = failure.map(([stage]) => stage);
        
    return answer;
}