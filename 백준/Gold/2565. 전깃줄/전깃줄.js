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

  arr.sort((a, b) => a[0] - b[0]);

  const bArr = arr.map(([_, b]) => b);

  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (bArr[i] > bArr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  const lis = Math.max(...dp);
  console.log(n - lis);

  process.exit();
});
