const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = Number(line.trim());
  const stars = [];

  for (let i = 0; i < input; i++) {
    stars.push(`${" ".repeat(input - (i + 1))}${"*".repeat(i + 1)}`);
  }
  console.log(stars.join("\n"));
  rl.close();
});
