const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) rl.close();
}).on("close", () => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  const answer = [];

  const stack = [];

  let order = 1;

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && stack[stack.length - 1] === order) {
      stack.pop();
      order++;
    }

    if (arr[i] === order) {
      order++;
    } else {
      stack.push(arr[i]);
    }
  }

  while (stack.length && stack[stack.length - 1] === order) {
    stack.pop();
    order++;
  }

  console.log(stack.length === 0 ? "Nice" : "Sad");

  process.exit();
});
