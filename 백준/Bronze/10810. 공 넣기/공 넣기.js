const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === input[0][1] + 1) rl.close();
}).on("close", () => {
  const [n, m] = input[0];
  const result = Array.from({ length: n }, () => 0);

  for (let x = 1; x < m + 1; x++) {
    const [i, j, k] = input[x];

    for (let y = i; y <= j; y++) {
      result[y - 1] = k;
    }
  }

  console.log(result.join(" "));

  process.exit();
});
