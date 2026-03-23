function solution(n, money) {
    var answer = 0;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    
    for (const coin of money) {
        for (let i = coin; i <= n; i++) {
            dp[i] += dp[i - coin];
            dp[i] %= 1000000007;
        }
    }
    
    return dp[n];
}