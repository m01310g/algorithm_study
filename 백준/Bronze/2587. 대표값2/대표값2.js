const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === 5) rl.close();
}).on("close", () => {
  const arr = input;
  arr.sort((a, b) => a - b);

  const mid = arr[2];
  const ave = arr.reduce((a, b) => a + b) / 5;

  console.log(ave);
  console.log(mid);

  process.exit();
});
