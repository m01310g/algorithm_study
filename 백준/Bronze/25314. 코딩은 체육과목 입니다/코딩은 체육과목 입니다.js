const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = Number(line.trim());

  const num = Math.floor(input / 4);

  console.log(`${"long ".repeat(num)}int`);

  rl.close();
});
