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
  const [n, k] = input[0];
  const temp = input[1];

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += temp[i];
  }

  let max = sum;

  for (let i = k; i < n; i++) {
    sum = sum - temp[i - k] + temp[i];
    max = Math.max(sum, max);
  }

  console.log(max);
  process.exit();
});
