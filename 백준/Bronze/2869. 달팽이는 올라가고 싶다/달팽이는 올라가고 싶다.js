const { getDefaultAutoSelectFamily } = require("net");
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
  const [[a, b, v]] = input;

  const days = Math.ceil((v - b) / (a - b));
  console.log(days);

  process.exit();
});
