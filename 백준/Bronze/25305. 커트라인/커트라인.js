const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 2) rl.close();
}).on("close", () => {
  const [[n, k], scores] = input;

  scores.sort((a, b) => b - a); // 점수 내림차순 정렬

  const prize = scores.slice(0, k);
  console.log(prize.pop());

  process.exit();
});
