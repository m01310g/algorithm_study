const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  rl.close();
}).on("close", () => {
  const str = input[0];
  const parts = str.split("-");
  const sums = parts.map((part) =>
    part.split("+").reduce((a, b) => a + Number(b), 0)
  );

  const result = sums.slice(1).reduce((a, b) => a - b, sums[0]);

  console.log(result);
  process.exit();
});
