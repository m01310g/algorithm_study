const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === 10) rl.close();
}).on("close", () => {
  const result = [];

  input.filter((e) => result.push(e % 42));

  const set = new Set(result);
  const arr = [...set];

  console.log(arr.length);

  process.exit();
});
