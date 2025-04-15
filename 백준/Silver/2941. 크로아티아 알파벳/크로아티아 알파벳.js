const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  rl.close();
}).on("close", () => {
  let str = input[0].toString();
  const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  for (let el of arr) {
    str = str.split(el).join(" ");
  }

  console.log(str.length);

  process.exit();
});
