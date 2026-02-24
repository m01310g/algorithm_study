function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let time = 0;
    let curr = 0;
    const bridge = Array(bridge_length).fill(0);
    
    while(truck_weights.length > 0 || curr > 0) {
        const out = bridge.shift();
        curr -= out;
        
        const next = truck_weights[0];
        if (next !== undefined && curr + next <= weight) {
            bridge.push(next);
            curr += next;
            truck_weights.shift();
        } else {
            bridge.push(0);
        }
        time++;
    }
    answer = time;
    return answer;
}