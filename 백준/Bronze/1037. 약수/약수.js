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
  const [arr] = input.slice(1).map((val) => val.split(" ").map(Number));

  console.log(Math.max(...arr) * Math.min(...arr));
  process.exit();
});
