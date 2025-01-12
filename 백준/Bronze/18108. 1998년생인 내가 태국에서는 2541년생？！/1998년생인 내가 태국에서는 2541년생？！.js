const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const year = Number(input);

console.log(year - 543);
