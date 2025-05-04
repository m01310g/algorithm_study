const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  if (Number(line.trim()) === 0) rl.close();
  input.push(Number(line.trim()));
}).on("close", () => {
  const arr = input;
  const answer = [];

  const isPrime = (val) => {
    if (val <= 1) return false;
    if (val === 2) return true;
    if (val % 2 === 0) return false;

    const sqrt = Math.floor(Math.sqrt(val));
    for (let i = 3; i <= sqrt; i++) {
      if (val % i === 0) return false;
    }

    return true;
  };

  for (const el of arr) {
    let cnt = 0;
    for (let i = el + 1; i <= el * 2; i++) {
      if (isPrime(i)) cnt++;
    }

    answer.push(cnt);
  }

  console.log(answer.join("\n"));

  process.exit();
});
