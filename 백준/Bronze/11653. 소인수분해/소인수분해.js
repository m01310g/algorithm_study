const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  rl.close();
}).on("close", () => {
  let n = input[0];
  let num = 2;
  const res = [];

  if (n === 1) process.exit();

  while (n !== 1) {
    if (n % num === 0) {
      res.push(num);
      n = n / num;
    } else {
      num++;
    }
  }

  console.log(res.join("\n"));

  process.exit();
});
