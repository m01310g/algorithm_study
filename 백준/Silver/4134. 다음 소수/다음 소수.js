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

  arr.forEach((val) => {
    while (!isPrime(val)) val++;
    answer.push(val);
  });

  console.log(answer.join("\n"));

  process.exit();
});
