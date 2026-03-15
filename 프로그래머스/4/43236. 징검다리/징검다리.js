function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    var answer = 0;
    let left = 1;
    let right = distance;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        let prev = 0;
        
        for (const rock of rocks) {
            if (rock - prev < mid) {
                count++;
            } else {
                prev = rock;
            }
        }
        
        if (distance - prev < mid) {
            count++;
        }
        
        if (count > n) {
            right = mid - 1;
        } else {
            answer = mid;
            left = mid + 1;
        }
    }
    
    return answer;
}