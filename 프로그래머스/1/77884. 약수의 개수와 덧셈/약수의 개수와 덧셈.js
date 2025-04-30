function solution(left, right) {
    const even = [];
    const odd = [];
    
    for (let i = left; i <= right; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        
        if (count % 2 === 0) even.push(i);
        else odd.push(i);
    }
    
    return even.reduce((a, b) => a + b) - odd.reduce((a, b) => a + b);
}