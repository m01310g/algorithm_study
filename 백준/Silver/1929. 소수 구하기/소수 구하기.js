const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  rl.close();
}).on("close", () => {
  const [arr] = input;
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

  for (let i = arr[0]; i <= arr[1]; i++) {
    if (isPrime(i)) answer.push(i);
  }

  console.log(answer.join("\n"));

  process.exit();
});
