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
  const [n] = input;
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  console.log(n === 0 ? 1 : arr.reduce((a, b) => a * b));
});
