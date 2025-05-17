const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === input[0][0] + 1) rl.close();
}).on("close", () => {
  const n = input[0][0];
  const arr = input.slice(1);

  const dp = Array.from({ length: n }, () => Array(3).fill(0));

  dp[0][0] = arr[0][0];
  dp[0][1] = arr[0][1];
  dp[0][2] = arr[0][2];

  for (let i = 1; i < n; i++) {
    dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  console.log(Math.min(...dp[n - 1]));

  process.exit();
});
