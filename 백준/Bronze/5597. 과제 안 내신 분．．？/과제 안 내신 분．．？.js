const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === 28) rl.close();
}).on("close", () => {
  const arr = Array.from({ length: 30 }, (_, index) => index + 1);

  const result = [];

  arr.filter((e) => {
    if (!input.includes(e)) result.push(e);
  });

  console.log(Math.min(...result));
  console.log(Math.max(...result));

  process.exit();
});
