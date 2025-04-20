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

  while ((layer * (layer + 1)) / 2 < n) {
    layer++;
  }

  const start = (layer * (layer - 1)) / 2 + 1;
  const index = n - start;

  let a, b;
  if (layer % 2 === 0) {
    a = index + 1;
    b = layer - index;
  } else {
    a = layer - index;
    b = index + 1;
  }

  console.log(`${a}/${b}`);

  process.exit();
});
