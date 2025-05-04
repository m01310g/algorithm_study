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
  const t = Number(input[0]);
  const arr = input.slice(1).map((val) => val.split(" ").map(Number));

  const answer = [];

  const gcd = (a, b) => {
    if (b === 0) return a;
    else return gcd(b, a % b);
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  for (const el of arr) {
    const [a, b] = el;
    answer.push(lcm(a, b));
  }

  console.log(answer.join("\n"));

  process.exit();
});
