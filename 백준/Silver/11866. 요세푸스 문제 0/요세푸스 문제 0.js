const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  rl.close();
}).on("close", () => {
  const [n, k] = input[0];
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const answer = [];
  let count = 1;

  while (arr.length > 0) {
    if (count % k === 0) {
      answer.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
    count++;
  }

  console.log(`<${answer.join(", ")}>`);

  process.exit();
});
