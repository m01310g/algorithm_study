function solution(sequence, k) {
    var answer = [];
    let left = 0, right = 0;
    let sum = 0;
    let bestLen = Infinity;
    let bestStart = Infinity;
    
    while (right < sequence.length) {
        sum += sequence[right++];
        
        while (sum > k) {
            sum -= sequence[left];
            left++;
        }
        
        if (sum === k) {
            if (right - left < bestLen) {
                bestLen = right - left;
                bestStart = left;
                answer = [left, right - 1];
            } else if (right - left === bestLen && left < bestStart) {
                bestStart = left;
                answer = [left, right - 1];
            }
        }
    }
    return answer;
}