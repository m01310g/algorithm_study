const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = Number(line.trim());

  console.log(
    (input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ? 1 : 0
  );

  rl.close();
});
