function solution(dirs) {
    var answer = 0;
    const arr = dirs.split("");
    const positionMap = {
        "U" : [0, 1], 
        "D": [0, -1],
        "R": [1, 0],
        "L": [-1, 0]
    };
    
    let curr = [0, 0];
    let count = 0;
    const way = new Set();
    
    for (const dir of arr) {
        const x = curr[0] + positionMap[dir][0];
        const y = curr[1] + positionMap[dir][1];
        const newCoord = [curr, [x, y]].sort((a, b) => b[0] - a[0] || b[1] - a[1]).join(" ");
        
        if (x > 5 || y > 5 || x < -5 || y < -5) continue;
        
        if (!way.has(newCoord)){
            way.add(newCoord);
            count++;
        }
        curr = [x, y];
    }
    
    answer = count;
    
    return answer;
}