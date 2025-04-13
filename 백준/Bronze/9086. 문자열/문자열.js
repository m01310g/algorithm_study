const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line.trim());

  if (input.length === Number(input[0]) + 1) rl.close();
}).on("close", () => {
  const t = Number(input[0]);
  const result = [];

  for (let i = 1; i < t + 1; i++) {
    const s = input[i].toString();
    result.push(`${s[0]}${s.slice(-1)}`);
  }

  console.log(result.join("\n"));

  process.exit();
});
