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
  const n = input[0][0];
  const arr = input[1];

  arr.sort((a, b) => a - b);

  const prefix = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + arr[i - 1];
  }

  console.log(prefix.reduce((a, b) => a + b));

  process.exit();
});
