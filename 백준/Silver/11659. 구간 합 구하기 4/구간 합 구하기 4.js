const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length > 0 && input.length === input[0][1] + 2) {
    rl.close();
  }
}).on("close", () => {
  const [n, m] = input[0];
  const nums = input[1];
  const range = input.slice(2);
  const answer = [];

  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  for (const [i, j] of range) {
    answer.push(prefixSum[j] - prefixSum[i - 1]);
  }

  console.log(answer.join("\n"));

  process.exit();
});
