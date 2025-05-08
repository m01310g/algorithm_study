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
  const arr = input.slice(1);
  let count = 0;
  let names = new Set();

  for (let i = 0; i < n; i++) {
    const line = arr[i];

    if (line === "ENTER") {
      names = new Set();
    } else {
      if (!names.has(line)) {
        names.add(line);
        count++;
      }
    }
  }

  console.log(count);

  process.exit();
});
