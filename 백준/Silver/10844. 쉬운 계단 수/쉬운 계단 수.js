const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  rl.close();
}).on("close", () => {
  const num = input[0];
  const MOD = 1000000000;
  const dp = Array.from({ length: num + 1 }, () => Array(10).fill(0));
  dp[1].fill(1);
  dp[1][0] = 0;

  if (num === 1) {
    console.log(9);
    process.exit();
  }

  for (let i = 2; i <= num; i++) {
    dp[i][0] = dp[i - 1][1] % MOD;
    dp[i][9] = dp[i - 1][8] % MOD;

    for (let j = 1; j <= 8; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }

  console.log(dp[num].reduce((a, b) => (a + b) % MOD, 0));

  process.exit();
});
