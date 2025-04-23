function solution(n) {
    let cnt = 0;
    
    for (let k = 1; (k * (k - 1)) / 2 < n; k++) {
        const tmp = n - (k * (k - 1)) / 2;
        if (tmp % k === 0) cnt++;
    }
    
    return cnt;
}