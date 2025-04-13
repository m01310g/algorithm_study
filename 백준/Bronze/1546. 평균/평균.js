const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) rl.close();
}).on("close", () => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

  const m = Math.max(...arr);

  const result = arr.map((e) => (e / m) * 100);
  console.log(result.reduce((a, b) => a + b) / n);

  process.exit();
});
