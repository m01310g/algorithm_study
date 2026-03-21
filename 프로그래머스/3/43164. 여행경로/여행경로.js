function solution(tickets) {
    var answer = [];
    const path = ["ICN"];
    const graph = new Map();
    const visited = Array(tickets.length).fill(false);
    
    for (let i = 0; i < tickets.length; i++) {
        const [a, b] = tickets[i];
        if (!graph.has(a)) graph.set(a, []);
        graph.get(a).push({ to: b, id: i });
    }
    
    for (const [key, value] of graph) {
        value.sort((a, b) => a.to.localeCompare(b.to));
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