const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === Number(input[0]) + 1) rl.close();
}).on("close", () => {
  const arr = input.slice(1).map((val) => val.split(" ").map(Number));
  const answer = [];

  for (const [n, m] of arr) {
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        dp[i][0] = 1;
        dp[i][i] = 1;
      }
    }

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (j > i) break;
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
      }
    }

    answer.push(dp[m][n]);
  }

  console.log(answer.join("\n"));

  process.exit();
});
