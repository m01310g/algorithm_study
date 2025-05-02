const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  // if (input.length === Number(input[0]) + 1) rl.close();
}).on("close", () => {
  const n = Number(input[0]);
  const logs = new Set();

  input.slice(1).forEach((line) => {
    if (!line) return;
    const [name, cmd] = line.split(" ");
    if (cmd === "enter") logs.add(name);
    else logs.delete(name);
  });

  const answer = [...logs].sort().reverse();

  console.log(answer.join("\n"));

  process.exit();
});
