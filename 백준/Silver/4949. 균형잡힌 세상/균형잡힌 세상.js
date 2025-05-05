const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  if (line === ".") rl.close();
  input.push(line.trim());
}).on("close", () => {
  const arr = input;
  const answer = [];

  for (const el of arr) {
    const stack = [];
    let isValid = true;
    for (let i = 0; i < el.length; i++) {
      if (el[i] === "(" || el[i] === "[") {
        stack.push(el[i]);
      } else if (el[i] === ")") {
        if (stack.pop() !== "(") {
          isValid = false;
          break;
        }
      } else if (el[i] === "]") {
        if (stack.pop() !== "[") {
          isValid = false;
          break;
        }
      }
    }
    answer.push(isValid && stack.length === 0 ? "yes" : "no");
  }

  console.log(answer.join("\n"));

  process.exit();
});
