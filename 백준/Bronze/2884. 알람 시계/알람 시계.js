const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const input = line.trim().split(" ");
  let h = Number(input[0]);
  let m = Number(input[1]);

  let time = h * 60 + m;
  time -= 45;

  if (time < 0) time += 24 * 60;

  h = Math.floor(time / 60);
  m = time % 60;

  console.log(h, m);

  rl.close();
});
