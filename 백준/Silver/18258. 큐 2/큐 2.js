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
  const arr = input.slice(1).map((val) => val.split(" "));
  const queue = [];

  let start = 0;
  const answer = [];

  for (const el of arr) {
    const cmd = el[0];

    if (cmd === "push") {
      queue.push(el[1]);
    } else if (cmd === "pop") {
      answer.push(queue.length > start ? queue[start++] : -1);
    } else if (cmd === "size") {
      answer.push(queue.length - start);
    } else if (cmd === "empty") {
      answer.push(queue.length - start === 0 ? 1 : 0);
    } else if (cmd === "front") {
      answer.push(queue.length > start ? queue[start] : -1);
    } else if (cmd === "back") {
      answer.push(queue.length > start ? queue[queue.length - 1] : -1);
    }
  }

  console.log(answer.join("\n"));

  process.exit();
});
