const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === input[0][0] + 1) rl.close();
}).on("close", () => {
  const arr = input.slice(1);
  const stack = [];
  const answer = [];

  for (const el of arr) {
    switch (el[0]) {
      case 1:
        stack.push(el[1]);
        break;
      case 2:
        stack.length !== 0 ? answer.push(stack.pop()) : answer.push(-1);
        break;
      case 3:
        answer.push(stack.length);
        break;
      case 4:
        stack.length !== 0 ? answer.push(0) : answer.push(1);
        break;
      case 5:
        stack.length !== 0
          ? answer.push(stack[stack.length - 1])
          : answer.push(-1);
        break;
    }
  }

  console.log(answer.join("\n"));
  process.exit();
});
