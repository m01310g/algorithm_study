const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === Number(input[0]) + 1) rl.close();
}).on("close", () => {
  const arr = input.slice(1);
  const max = Math.max(...arr);
  const isPrime = Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  const answer = [];

  for (let i = 2; i * i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (const n of arr) {
    let cnt = 0;
    for (let i = 2; i <= n / 2; i++) {
      if (isPrime[i] && isPrime[n - i]) cnt++;
    }

    answer.push(cnt);
  }

  console.log(answer.join("\n"));

  process.exit();
});
