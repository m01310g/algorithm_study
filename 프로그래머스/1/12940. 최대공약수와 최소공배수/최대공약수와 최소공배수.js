const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}

const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}