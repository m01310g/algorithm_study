const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 2) rl.close();
}).on("close", () => {
  const [[n], arr] = input;
  const dp = Array(n).fill(0);

  dp[0] = arr[0];
  let maxSum = dp[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
    maxSum = Math.max(maxSum, dp[i]);
  }

  console.log(maxSum);

  process.exit();
});
