const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === input[0] + 1) rl.close();
}).on("close", () => {
  const n = input[0];
  const arr = input.slice(1);
  const dp = Array(n).fill(0);

  if (n === 1) {
    console.log(arr[0]);
    process.exit();
  }

  dp[0] = arr[0];
  dp[1] = arr[0] + arr[1];
  dp[2] = Math.max(arr[1] + arr[2], arr[0] + arr[2], arr[0] + arr[1]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + arr[i],
      dp[i - 3] + arr[i - 1] + arr[i]
    );
  }

  console.log(dp[n - 1]);
  process.exit();
});
