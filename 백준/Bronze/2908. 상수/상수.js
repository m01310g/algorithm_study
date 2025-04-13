const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(String));
  rl.close();
}).on("close", () => {
  const [a, b] = input[0];

  const reverseNum = (str) => Number(str.split("").reverse().join(""));

  const reversedA = reverseNum(a);
  const reversedB = reverseNum(b);

  console.log(Math.max(reversedA, reversedB));

  process.exit();
});
