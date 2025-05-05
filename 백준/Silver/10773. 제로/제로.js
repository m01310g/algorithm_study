const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === input[0] + 1) rl.close();
}).on("close", () => {
  const arr = input.slice(1);
  const stack = [];

  for (const el of arr) {
    el !== 0 ? stack.push(el) : stack.pop();
  }

  console.log(stack.reduce((a, b) => a + b, 0));
  process.exit();
});
