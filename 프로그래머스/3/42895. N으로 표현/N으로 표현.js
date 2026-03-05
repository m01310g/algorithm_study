function solution(N, number) {
    var answer = 0;
    const dp = [];
    
    for (let i = 0; i < 9; i++) {
        dp.push(new Set());
    }
    
    for (let k = 1; k < 9; k++) {
        dp[k].add(Number(N.toString().repeat(k)));
        for (let i = 1; i < k; i++) {
            for (const a of dp[i]) {
                for (const b of dp[k - i]) {
                    dp[k].add(a + b);
                    dp[k].add(a - b);
                    dp[k].add(a * b);
                    if (b !== 0) dp[k].add(Math.floor(a / b));
                }
            }
        }
        
        if (dp[k].has(number)) return k;
    }
    
    return -1;
}