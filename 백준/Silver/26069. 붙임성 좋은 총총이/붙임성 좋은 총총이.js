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
  const n = Number(input[0]);
  const arr = input.slice(1).map((val) => val.split(" "));
  const dancers = new Set(["ChongChong"]);

  for (const [a, b] of arr) {
    if (dancers.has(a) || dancers.has(b)) {
      dancers.add(a);
      dancers.add(b);
    }
  }

  console.log(dancers.size);

  process.exit();
});
