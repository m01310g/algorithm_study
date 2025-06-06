const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length > 0) {
    const n = input[0][0];

    if (input.length === n + 1) rl.close();
  }
}).on("close", () => {
  const n = input[0][0];
  const arr = input.slice(1);
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]; // 시작 시간 기준 오름차순
    return a[1] - b[1]; // 끝나는 시간 기준 오름차순
  });

  let count = 0;
  let endTime = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i][0] >= endTime) {
      count++;
      endTime = arr[i][1];
    }
  }

  console.log(count);

  process.exit();
});
