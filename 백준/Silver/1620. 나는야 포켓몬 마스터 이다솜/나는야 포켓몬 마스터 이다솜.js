const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (
    input.length ===
    input[0]
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b) +
      1
  )
    rl.close();
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1, n + 1);
  const probs = input.slice(n + 1);

  const nameToNum = new Map();
  const numToName = [];

  arr.forEach((name, idx) => {
    nameToNum.set(name, idx + 1);
    numToName[idx + 1] = name;
  });

  const answer = probs.map((val) => {
    const num = Number(val);

    if (!isNaN(num)) return numToName[num];
    else return nameToNum.get(val);
  });

  console.log(answer.join("\n"));

  process.exit();
});
