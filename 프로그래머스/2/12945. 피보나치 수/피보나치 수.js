function solution(n) {
    const MOD = 1234567;
    const dp = [0, 1, 2];
    
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % MOD;
    }
    
    return dp[n];
}