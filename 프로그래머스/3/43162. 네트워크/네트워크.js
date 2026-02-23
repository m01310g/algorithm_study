function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false);
    let count = 0;
    
    function dfs(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
        if (i !== node && computers[node][i] === 1 && !visited[i]) dfs(i, visited);
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }
    
    answer = count;
    
    return answer;
}