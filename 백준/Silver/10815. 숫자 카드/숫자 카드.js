const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 4) rl.close();
}).on("close", () => {
  const n = input[0],
    m = input[2];
  const cards = input[1].split(" ").map(Number);
  const cardSet = new Set(cards);
  const nums = input[3].split(" ").map(Number);

  console.log(nums.map((val) => (cardSet.has(val) ? 1 : 0)).join(" "));

  process.exit();
});
