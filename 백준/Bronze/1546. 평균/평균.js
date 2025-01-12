const { join } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    if (input.length === 0) {
        input.push(Number(line.trim()));
    } else {
        input.push(line.split(" ").map(Number));
        rl.close();
    }
});

rl.on("close", () => {
    const n = input[0];
    let result = 0;
    const max = Math.max(...input[1]);
    for (let i = 0; i < n; i++) {
        result += (input[1][i] / max) * 100;
    }
    console.log(result / n);
});
