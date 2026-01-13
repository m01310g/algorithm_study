function solution(a, b) {
    var answer = '';
    const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = b;
    
    for (let i = 0; i < a - 1; i++) {
        day += arr[i];
    }
    
    answer = days[(day - 1) % 7]
    
    return answer;
}