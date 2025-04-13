const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(String(line.trim()));
}).on("close", () => {
  console.log(input.join("\n"));
  process.exit();
});
