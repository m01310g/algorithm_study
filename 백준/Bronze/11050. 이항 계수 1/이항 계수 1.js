const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 1) rl.close();
}).on("close", () => {
  const [n, k] = input[0];

  if (k === 0) {
    console.log(1);
    return;
  }

  const nArr = Array.from({ length: k }, (_, i) => n - i);
  const kArr = Array.from({ length: k }, (_, i) => i + 1);

  console.log(nArr.reduce((a, b) => a * b) / kArr.reduce((a, b) => a * b));
});
