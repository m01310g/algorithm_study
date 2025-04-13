const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line.trim().toString());

  rl.close();
}).on("close", () => {
  console.log(input[0].charCodeAt());

  process.exit();
});
