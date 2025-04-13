const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === 9) rl.close();
}).on("close", () => {
  const result = [];
  const num = Math.max(...input);
  result.push(num);
  result.push(input.indexOf(num) + 1);

  console.log(result.join("\n"));

  process.exit();
});
