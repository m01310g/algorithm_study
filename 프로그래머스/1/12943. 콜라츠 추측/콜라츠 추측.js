function solution(num) {
    let count = 0, res = num;
    
    while (res !== 1) {
        if (res % 2 === 0) {
            res /= 2;
            count++;
        } else {
            res = res * 3 + 1;
            count++;
        }
        
        if (count === 500) return -1;
    }
    
    return count;
}