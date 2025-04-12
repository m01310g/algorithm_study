const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length === 2) {
    const time = input[0].trim().split(" ");
    let [h, m] = time.map(Number);

    m += Number(input[1]);

    if (m >= 60) {
      h += Math.floor(m / 60);

      m %= 60;
      h = h >= 24 ? h - 24 : h;
    }

    console.log(h, m);
    rl.close();
  }
});
