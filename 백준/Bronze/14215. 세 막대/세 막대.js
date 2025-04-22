const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  rl.close();
}).on("close", () => {
  const [[a, b, c]] = input;

  let max = Math.max(a, b, c);
  const sum = a + b + c - max;

  if (max >= sum) max = sum - 1;

  console.log(max + sum);

  process.exit();
});
