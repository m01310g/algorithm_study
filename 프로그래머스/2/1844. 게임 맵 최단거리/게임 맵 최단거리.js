class Deque {
    constructor() {
        this.data = [];
        this.front = 0;
        this.back = 0;
    }
    
    push(val) {
        this.data[this.back++] = val;
    }
    
    shift() {
        if (this.front === this.back) return undefined;
        return this.data[this.front++];
    }
    
    isEmpty() {
        return this.front === this.back;
    }
}

function solution(maps) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const bfs = () => {
        const queue = new Deque();
        const n = maps.length, m = maps[0].length;
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        
        visited[0][0] = true;
        queue.push([0, 0, 1]);
        
        while (!queue.isEmpty()) {
            const [x, y, dist] = queue.shift();
            
            // 도착 지점에 도달했을 경우
            if (x === n - 1 && y === m - 1) return dist;
            
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
        
        return -1;
    }
    
    return bfs();
}