const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  rl.close();
}).on("close", () => {
  const n = input[0];

  const result = [];
  for (let i = 0; i < (2 * n - 1) / 2; i++) {
    result.push(`${" ".repeat(n - i - 1)}${"*".repeat(2 * i + 1)}`);
  }

  for (let i = Math.ceil((2 * n - 1) / 2); i < 2 * n - 1; i++) {
    result.push(`${" ".repeat(i - n + 1)}${"*".repeat(4 * n - 2 * i - 3)}`);
  }

  console.log(result.join("\n"));
  process.exit();
});
