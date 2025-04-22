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
  const n = input[0];
  let num = 666;
  let count = 1;

  while (count < n) {
    num++;
    if (String(num).includes("666")) count++;
  }

  console.log(num);

  process.exit();
});
