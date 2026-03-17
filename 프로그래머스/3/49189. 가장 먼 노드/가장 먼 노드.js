function solution(n, edge) {
    var answer = 0;
    const graph = Array.from({ length: n + 1 }, () => []);
    const dist = Array(n + 1).fill(-1);
    
    for (const [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const bfs = (start, graph, dist) => {
        const queue = [];
        let head = 0;
        dist[start] = 0;
        
        queue.push(start);
        
        while (head < queue.length) {
            const curr = queue[head++];
            
            for (const next of graph[curr]) {
                if (dist[next] === -1) {
                    dist[next] = dist[curr] + 1;
                    queue.push(next);
                }
            }
        }
    }
    
    bfs(1, graph, dist);
    
    const maxDist = Math.max(...dist);
    
    for (const d of dist) {
        if (d === maxDist) answer++;
    }
    
    return answer;
}