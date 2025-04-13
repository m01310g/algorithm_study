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
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  const v = Number(input[2]);

  let result = 0;

  arr.map((e) => {
    if (e === v) result += 1;
  });

  console.log(result);

  process.exit();
});
