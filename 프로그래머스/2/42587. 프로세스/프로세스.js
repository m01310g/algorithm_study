function solution(priorities, location) {
    let order = 0;
    let head = 0;
    
    const queue = priorities.map((p, i) => ({ i, p }));
    
    while (head < queue.length) {
        const curr = queue[head++];
        if (queue.slice(head).some(v => curr.p < v.p)) queue.push(curr);
        else {
            order++;
            if (curr.i === location) return order;
        }
    }
}