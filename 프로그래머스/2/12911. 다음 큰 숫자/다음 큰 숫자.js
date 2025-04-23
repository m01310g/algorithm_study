const countsOne = (n) => {
    return n.toString(2).split("1").length - 1;
}

function solution(n) {
    let targetCnt = countsOne(n);
    let next = n + 1;
    
    while (countsOne(next) !== targetCnt) {
        next++;
    }
    
    return next;
}