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
  const arr = input
    .slice(1, input.length)
    .map((val) => val.split(" ").map(Number));

  arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });

  console.log(arr.map((val) => val.join(" ")).join("\n"));

  process.exit();
});
