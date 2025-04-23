function solution(s) {
    let cnt = 0;
    let zeroCnt = 0;
    
    while (s !== "1") {
        const oneLen = s.replace(/0/g, "").length;
        zeroCnt += s.length - oneLen;
        s = oneLen.toString(2);
        cnt++;
    }
    
    return [cnt, zeroCnt];
}