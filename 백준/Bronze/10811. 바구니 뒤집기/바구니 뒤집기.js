const { join } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let count = 0;

rl.on("line", (line) => {
    count++;
    if (count === 1) {
        input.push(line.split(" ").map(Number));
    } else {
        input.push(line.split(" ").map(Number));
    }

    if (input[0][1] + 1 === count) {
        rl.close();
    }
});

rl.on("close", () => {
    const [n, m] = input[0];
    const result = Array.from({ length: n }, (_, index) => index + 1);
    for (let i = 1; i <= m; i++) {
        const [x, y] = input[i];
        const reversed = result.slice(x - 1, y).reverse();
        result.splice(x - 1, y - x + 1, ...reversed);
    }

    console.log(result.join(" "));
});
