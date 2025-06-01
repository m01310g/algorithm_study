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
  const [n, m] = input[0];
  const arr = input[1];
  const modCount = Array(m).fill(0);
  modCount[0] = 1;

  let sum = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    sum = (sum + arr[i]) % m;

    if (sum < 0) sum += m;

    result += modCount[sum];
    modCount[sum]++;
  }

  console.log(result);

  process.exit();
});
