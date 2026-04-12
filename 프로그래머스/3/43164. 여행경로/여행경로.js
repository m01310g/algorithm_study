function solution(tickets) {
    var answer = [];
    const graph = new Map();
    const path = ["ICN"];
    const visited = Array(tickets.length).fill(false);
    
    for (let i = 0; i < tickets.length; i++) {
        const [a, b] = tickets[i];
        if (!graph.has(a)) graph.set(a, []);    // graph에 a가 없으면 a 먼저 set
        graph.get(a).push({ to: b, id: i });    // graph[a]에 { to, id } 추가
    }
    
    for (const [key, value] of graph) {
        value.sort((a, b) => a.to.localeCompare(b.to)); // 알파벳 순으로 정렬
    }
    
    const dfs = (curr) => {
        if (path.length === tickets.length + 1) {
            answer = [...path];
            return true;
        }
        
        for (const ticket of graph.get(curr) || []) {
            if (!visited[ticket.id]) {
                visited[ticket.id] = true;
                path.push(ticket.to);
                
                if (dfs(ticket.to)) return true;
                
                path.pop();
                visited[ticket.id] = false;
            }
        }
        
        return false;
    }
    
    dfs("ICN");
    
    return answer;
}