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
  const [n] = input;

  let layer = 1;

  while (1 + 3 * layer * (layer - 1) < n) {
    layer++;
  }

  console.log(layer);

  process.exit();
});
