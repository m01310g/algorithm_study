const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = line.trim();
  const year = Number(input);

  console.log(year - 543);

  rl.close();
});
