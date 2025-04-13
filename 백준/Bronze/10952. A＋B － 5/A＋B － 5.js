const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const result = [];

rl.on("line", (line) => {
  const [a, b] = line.trim().split(" ").map(Number);

  if (a === 0 && b === 0) {
    console.log(result.join("\n"));
    rl.close();
  } else {
    result.push(a + b);
  }
});
