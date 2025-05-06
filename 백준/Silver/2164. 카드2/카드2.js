const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  rl.close();
}).on("close", () => {
  const arr = Array.from({ length: input[0] }, (_, i) => i + 1);
  let front = 0;

  while (arr.length - front > 1) {
    front++;
    arr.push(arr[front]);
    front++;
  }

  console.log(arr[front]);

  process.exit();
});
