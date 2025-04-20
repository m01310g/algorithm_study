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
  const point = Math.pow(2, n) + 1;

  console.log(point * point);
  process.exit();
});
