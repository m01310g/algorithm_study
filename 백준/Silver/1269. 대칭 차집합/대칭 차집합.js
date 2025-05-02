const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 3) rl.close();
}).on("close", () => {
  const aSet = new Set(input[1].split(" ").map(Number));
  const bSet = new Set(input[2].split(" ").map(Number));

  const lSet = [];
  const rSet = [];

  aSet.forEach((val) => {
    if (!bSet.has(val)) lSet.push(val);
  });
  bSet.forEach((val) => {
    if (!aSet.has(val)) rSet.push(val);
  });

  console.log(rSet.length + lSet.length);
  process.exit();
});
