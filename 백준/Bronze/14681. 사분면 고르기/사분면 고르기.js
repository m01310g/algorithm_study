const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length === 2) {
    if (input[0] > 0 && input[1] > 0) console.log(1);
    else if (input[0] < 0 && input[1] > 0) console.log(2);
    else if (input[0] < 0 && input[1] < 0) console.log(3);
    else if (input[0] > 0 && input[1] < 0) console.log(4);

    rl.close();
  }
});
