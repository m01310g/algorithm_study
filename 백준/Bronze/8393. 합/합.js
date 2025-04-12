const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const num = Number(line.trim());

  let result = 0;

  for (let i = 1; i < num + 1; i++) result += i;

  console.log(result);

  rl.close();
});
