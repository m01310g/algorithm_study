const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(String(line.trim()));
  rl.close();
}).on("close", () => {
  const nums = {
    "": 1,
    ABC: 2,
    DEF: 3,
    GHI: 4,
    JKL: 5,
    MNO: 6,
    PQRS: 7,
    TUV: 8,
    WXYZ: 9,
  };

  let total = 0;
  const arr = input[0].split("");

  for (let char of arr) {
    for (let key in nums) {
      if (key.includes(char)) {
        total += nums[key] + 1;
      }
    }
  }

  console.log(total);

  process.exit();
});
