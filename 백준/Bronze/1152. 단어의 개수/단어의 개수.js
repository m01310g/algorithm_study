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
  const result = input[0].trim().split(" ").filter(Boolean);
  console.log(result.length);
  process.exit();
});
