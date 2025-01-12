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

    if (count === input[0][1] + 1) {
        rl.close();
    }
});

rl.on("close", () => {
    const [n, m] = input[0];
    const result = Array.from({ length: n }, (_, index) => index + 1);

    for (let i = 1; i <= m; i++) {
        let temp;
        const [x, y] = input[i];
        temp = result[x - 1];
        result[x - 1] = result[y - 1];
        result[y - 1] = temp;
    }

    console.log(result.join(" "));
});
