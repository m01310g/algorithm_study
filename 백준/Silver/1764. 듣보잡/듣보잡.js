const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (
    input.length ===
    input[0]
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b) +
      1
  )
    rl.close();
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  const lSet = new Set(input.slice(1, n + 1));
  const sSet = new Set(input.slice(n + 1));

  const answer = [];

  lSet.forEach((val) => {
    if (sSet.has(val)) answer.push(val);
  });

  answer.sort();
  console.log(answer.length);
  console.log(answer.join("\n"));
  process.exit();
});
