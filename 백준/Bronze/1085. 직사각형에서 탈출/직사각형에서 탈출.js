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
  const [[x, y, w, h]] = input;

  console.log(Math.min(w - x, h - y, x, y));
  process.exit();
});
