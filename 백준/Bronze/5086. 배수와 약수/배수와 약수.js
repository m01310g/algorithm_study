const { getDefaultAutoSelectFamily } = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  if (
    line.trim().split(" ").map(Number)[0] === 0 &&
    line.trim().split(" ").map(Number)[1] === 0
  )
    rl.close();
  input.push(line.trim().split(" ").map(Number));
}).on("close", () => {
  const arr = input;
  const res = [];

  for (const el of arr) {
    if (el[1] % el[0] === 0) {
      res.push("factor");
    } else if (el[0] % el[1] === 0) {
      res.push("multiple");
    } else {
      res.push("neither");
    }
  }

  console.log(res.join("\n"));
  process.exit();
});
