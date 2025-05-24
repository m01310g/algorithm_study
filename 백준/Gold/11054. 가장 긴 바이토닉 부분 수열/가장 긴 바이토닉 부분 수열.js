const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 2) rl.close();
}).on("close", () => {
  const n = input[0][0];
  const arr = input[1];
  const lis = Array(n).fill(0);
  const lds = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    lis[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    lds[i] = 1;
    for (let j = n - 1; j > i; j--) {
      if (arr[i] > arr[j]) {
        lds[i] = Math.max(lds[i], lds[j] + 1);
      }
    }
  }

  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    maxLen = Math.max(maxLen, lis[i] + lds[i] - 1);
  }

  console.log(maxLen);

  process.exit();
});
