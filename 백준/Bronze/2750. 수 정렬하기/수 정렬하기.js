const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === input[0] + 1) rl.close();
}).on("close", () => {
  const [_, ...arr] = input;
  console.log(arr.sort((a, b) => a - b).join("\n"));

  process.exit();
});
