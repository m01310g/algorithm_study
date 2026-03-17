function solution(n, results) {
    var answer = 0;
    const winGraph = Array.from({length: n + 1}, () => []);
    const loseGraph = Array.from({length: n + 1}, () => []);
    
    for (const result of results) {
        const [A, B] = result;
        winGraph[A].push(B);
        loseGraph[B].push(A);
    }
    
    const dfs = (node, graph, visited) => {
        for (const next of graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                dfs(next, graph, visited);
            }
        }
    }
    
    for (let i = 1; i <= n; i++) {
        const winVisited = Array(n + 1).fill(false);
        const loseVisited = Array(n + 1).fill(false);

        dfs(i, winGraph, winVisited);
        dfs(i, loseGraph, loseVisited);
        
        const count = winVisited.reduce((acc, curr) => {
            if (curr) return acc + 1;
            return acc;
        }) + loseVisited.reduce((acc, curr) => {
            if (curr) return acc + 1;
            return acc;
        });
        
        if (count === n - 1) answer++;
    }
    
    return answer;
}