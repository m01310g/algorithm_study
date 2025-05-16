const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
}).on("close", () => {
  const num = input[0];
  const dp = Array(num + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= num; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }

  console.log(dp[num]);

  process.exit();
});
