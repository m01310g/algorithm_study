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
  const arr = input.slice(1).map((val) => val.split(" ").map(Number));
  const deque = [];
  let front = 0,
    back = 0;
  const answer = [];

  for (const el of arr) {
    const [cmd, num] = el;

    switch (cmd) {
      case 1:
        deque[--front] = num;
        break;
      case 2:
        deque[back++] = num;
        break;
      case 3:
        answer.push(front === back ? -1 : deque[front++]);
        break;
      case 4:
        answer.push(front === back ? -1 : deque[--back]);
        break;
      case 5:
        answer.push(back - front);
        break;
      case 6:
        answer.push(front === back ? 1 : 0);
        break;
      case 7:
        answer.push(front === back ? -1 : deque[front]);
        break;
      case 8:
        answer.push(front === back ? -1 : deque[back - 1]);
        break;
    }
  }

  console.log(answer.join("\n"));
  process.exit();
});
