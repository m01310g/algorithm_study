const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === Number(input[0]) + 1) rl.close();
}).on("close", () => {
  const arr = input.slice(1);
  const answer = [];

  for (const el of arr) {
    let isValid = true;
    const stack = [];
    for (let i = 0; i < el.length; i++) {
      if (el[i] === "(") {
        stack.push(1);
      } else {
        if (stack.length === 0) {
          isValid = false;
          break;
        } else {
          stack.pop();
        }
      }
    }

    isValid && stack.length === 0 ? answer.push("YES") : answer.push("NO");
  }

  console.log(answer.join("\n"));
  process.exit();
});
