const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === 2) rl.close();
}).on("close", () => {
  const [a, b] = input;
  console.log(a * b);
  process.exit();
});
