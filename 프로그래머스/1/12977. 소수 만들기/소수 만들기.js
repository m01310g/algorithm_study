function solution(nums) {
    var answer = -1;
    const n = nums.length;
    let count = 0;
    
    const isPrime = (num) => {
        if (num < 2) return false;
        
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    } 

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const num = nums[i] + nums[j] + nums[k];
                
                if (isPrime(num)) count++;
            }
        }
    }
    
    answer = count;
    
    return answer;
}