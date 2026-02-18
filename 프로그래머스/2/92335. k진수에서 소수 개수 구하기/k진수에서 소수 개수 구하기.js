function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    var answer = 0;
    const num = n.toString(k);
    const arr = num.split("0");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") continue;
        if (isPrime(Number(arr[i]))) answer++;
    }
    
    return answer;
}