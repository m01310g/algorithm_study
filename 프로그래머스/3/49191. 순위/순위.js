function solution(n, results) {
    var answer = 0;
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
    
    for (const [A, B] of results) {
        graph[A][B] = true; // A가 B를 이김
    }
    
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (graph[i][k] && graph[k][j]) {
                    graph[i][j] = true;
                }
            }
        }
    }
    
    for (let i = 1; i <= n; i++) {
        let count = 0;
        
        for (let j = 1; j <= n; j++) {
            if (i === j) continue;
            
            if (graph[i][j] || graph[j][i]) count++;
        }
        
        if (count === n - 1) answer++;
    }
    
    return answer;
}