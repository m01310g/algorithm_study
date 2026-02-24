function solution(priorities, location) {
    var answer = 0;
    const queue = priorities.map((p, i) => ({ i, p }));
    let order = 0;
    
    while(queue.length) {
        const curr = queue.shift();
        if (queue.some((doc) => doc.p > curr.p)) queue.push(curr);
        else {
            order++;
            if (curr.i === location) return order;
        }
    }
}