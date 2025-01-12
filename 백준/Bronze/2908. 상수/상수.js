const { join } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input = line.split(" ");
    rl.close();
});

rl.on("close", () => {
    const reversedNum = input.map((num) => {
        return parseInt(num.split("").reverse().join(""), 10);
    });

    console.log(Math.max(...reversedNum));
});
