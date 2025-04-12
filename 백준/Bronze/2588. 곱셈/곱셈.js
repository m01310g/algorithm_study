const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length === 2) {
    const a = Number(input[0]);
    const b = Number(input[1]);

    const i = a * (b % 10);
    const j = (a * ((b % 100) - (b % 10))) / 10;
    const k = a * Math.floor(b / 100);

    console.log(i);
    console.log(j);
    console.log(k);
    console.log(i + j * 10 + k * 100);

    rl.close();
  }
});
