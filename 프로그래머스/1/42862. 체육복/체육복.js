function solution(n, lost, reserve) {
    var answer = 0;
    let count = n;
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);
    
    for (const student of lost) {
        if (reserveSet.has(student)) {
            lostSet.delete(student);
            reserveSet.delete(student);
        }
    }
    
    count -= lostSet.size;

    for (const num of lostSet) {
        if (reserveSet.has(num - 1)) {
            reserveSet.delete(num - 1);
            count++;
        } else if (reserveSet.has(num + 1)) {
            reserveSet.delete(num + 1);
            count++;
        }
    }
    
    answer = count;
    
    return answer;
}