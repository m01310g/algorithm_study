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
  const s = input[0].toString();
  const i = Number(input[1]);

  console.log(s[i - 1]);

  process.exit();
});
