function solution(a, b) {
    var answer = '';
    
    const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const total = months.slice(0, a - 1).reduce((sum, cur) => sum + cur, 0) + b;
    
    answer = days[(total - 1) % 7];
    
    return answer;
}