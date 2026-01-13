function solution(n) {
    var answer = 0;
    
    let count = 0;
    
    const isPrime = (num) => {
        const arr = Array(n + 1).fill(true).fill(false, 0 ,2);
        let count = 0;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (arr[i]) {
                for (let j = i * i; j <= n; j += i) {
                    arr[j] = false;
                }
            }
        }
        
        for (let i = 0; i <= num; i++) {
            if (arr[i]) count++;
        }
        
        return count;
    }
    
    answer = isPrime(n);
        
    return answer;
}