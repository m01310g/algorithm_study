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
  const arr = [1, 1, 2, 2, 2, 8];
  const result = arr.map((el, idx) => el - input[0][idx]);

  console.log(result.join(" "));

  process.exit();
});
