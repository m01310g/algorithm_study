const gcd = (a, b) => {
    if (b === 0) return a;
    else return gcd(b, a % b);
}

const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    return arr.reduce((acc, curr) => lcm(acc, curr));
}