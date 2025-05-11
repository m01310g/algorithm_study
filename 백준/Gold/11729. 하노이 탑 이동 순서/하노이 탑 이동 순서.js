const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  rl.close();
}).on("close", () => {
  const n = input[0];
  const answer = [];

  const hanoi = (num, start = 1, dest = 3, via = 2) => {
    if (num <= 1) {
      answer.push([start, dest]);
      return 1;
    }

    let count = 0;

    count += hanoi(num - 1, start, via, dest);

    count += 1;
    answer.push([start, dest]);
    count += hanoi(num - 1, via, dest, start);

    return count;
  };

  console.log(hanoi(n));
  console.log(answer.map((val) => val.join(" ")).join("\n"));

  process.exit();
});
