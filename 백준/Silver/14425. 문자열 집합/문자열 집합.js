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
  const arr = input.slice(1, n + 1);
  const check = input.slice(n + 1, n + m + 1);

  const arrSet = new Set(arr);

  console.log(check.map((val) => arrSet.has(val)).filter(Boolean).length);

  process.exit();
});
