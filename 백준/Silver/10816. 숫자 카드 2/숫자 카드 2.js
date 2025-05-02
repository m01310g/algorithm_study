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
  const n = Number(input[0]),
    m = Number(input[2]);

  const cards = input[1].split(" ").map(Number);
  const check = input[3].split(" ").map(Number);

  const map = new Map();

  for (const el of cards) {
    map.set(el, (map.get(el) || 0) + 1);
  }

  const answer = [];

  check.forEach((val) => {
    if (map.has(val)) answer.push(map.get(val));
    else answer.push(0);
  });

  console.log(answer.join(" "));

  process.exit();
});
