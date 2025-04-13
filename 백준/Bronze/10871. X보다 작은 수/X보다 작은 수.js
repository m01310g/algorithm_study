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
  const [n, x] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  const result = [];

  arr.map((e) => {
    if (e < x) result.push(e);
  });

  console.log(result.join(" "));
  process.exit();
});
