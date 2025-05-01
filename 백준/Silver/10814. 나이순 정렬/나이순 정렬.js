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
  const arr = input.slice(1, input.length).map((val) => val.split(" "));

  arr.sort((a, b) => Number(a[0]) - Number(b[0]));

  console.log(arr.map((val) => val.join(" ")).join("\n"));

  process.exit();
});
