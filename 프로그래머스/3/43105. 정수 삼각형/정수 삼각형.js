function solution(triangle) {
    let answer = 0;
    const n = triangle.length;
    const dp = triangle;
    
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
          dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);  
        }
    }
    
    answer = dp[0][0];
    
    return answer;
}