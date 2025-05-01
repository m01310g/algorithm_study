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
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

  const uniqSorted = [...new Set(arr)].sort((a, b) => a - b);

  const map = new Map();
  uniqSorted.forEach((val, idx) => map.set(val, idx));

  const answer = arr.map((val) => map.get(val));
  console.log(answer.join(" "));

  process.exit();
});
