const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" "));
  rl.close();
}).on("close", () => {
  const n = input[0][0].toString().toUpperCase();
  const b = Number(input[0][1]);

  console.log(parseInt(n, b));
  process.exit();
});
