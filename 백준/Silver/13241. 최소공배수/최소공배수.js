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
  const [[a, b]] = input;

  const gcd = (a, b) => {
    if (b === 0) return a;
    else return gcd(b, a % b);
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  console.log(lcm(a, b));

  process.exit();
});
