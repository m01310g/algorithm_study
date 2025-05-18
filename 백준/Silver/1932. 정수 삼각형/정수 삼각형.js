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
  const dp = [...arr];

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (j === 0) {
        dp[i][j] += dp[i - 1][j];
      } else if (j === dp[i].length - 1) {
        dp[i][j] += dp[i - 1][j - 1];
      } else {
        dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }

  console.log(Math.max(...dp[dp.length - 1]));

  process.exit();
});
