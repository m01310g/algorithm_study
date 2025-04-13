const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());

  const t = Number(input[0]);

  if (input.length === t + 1) {
    const result = [];
    for (let i = 1; i < t + 1; i++) {
      const [a, b] = input[i].split(" ").map(Number);
      result.push(`Case #${i}: ${a + b}`);
    }

    console.log(result.join("\n"));
    rl.close();
  }
});
