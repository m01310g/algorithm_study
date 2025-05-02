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
  const answer = new Set();

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      answer.add(str.slice(i, j));
    }
  }

  console.log(answer.size);

  process.exit();
});