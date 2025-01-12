const { join } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    if (input.length === 0) {
        input.push(line.trim().toString());
    } else {
        input.push(Number(line));
        rl.close();
    }
});

rl.on("close", () => {
    console.log(input[0][input[1] - 1]);
});
