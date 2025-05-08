function solution(priorities, location) {
    const queue = priorities.map((priority, index) => ({ index, priority }));
    
    let priorityOrder = 0;
    
    while (queue.length) {
        const current = queue.shift();
        
        if (queue.some((doc) => doc.priority > current.priority)) {
            queue.push(current);
        } else {
            priorityOrder++;
            
            if (current.index === location) {
                return priorityOrder;
            }
        }
    }
}