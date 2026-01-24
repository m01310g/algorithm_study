function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);
    
    const DFS = (k, num) => {
        answer = Math.max(answer, num);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                DFS(k - dungeons[i][1], num + 1);
                visited[i] = false;
            }
        }
    }
    
    DFS(k, 0);

    return answer;
}