const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = line.trim().split(" ");

  const a = Number(input[0]);
  const b = Number(input[1]);

  if (a > b) console.log(">");
  else if (a < b) console.log("<");
  else if (a === b) console.log("==");

  rl.close();
});
