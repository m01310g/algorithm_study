function solution(board) {
    const n = board.length;
    const m = board[0].length;
    const dp = Array.from(Array(n), () => Array(m).fill(0));
    let maxLen = 0;
    let answer = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                dp[i][j] = 0;
                continue;
            }
            
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]
                ) + 1;
            }
            
            maxLen = Math.max(maxLen, dp[i][j]);
        }
    }
    
    answer = Math.pow(maxLen, 2);
    
    return answer;
}