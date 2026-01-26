function solution(progresses, speeds) {
    var answer = [];
    const completed = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
        completed.push(day);
    }

    let current = completed[0];
    let count = 1;
    
    for (let i = 1; i < completed.length; i++) {
        if (completed[i] <= current) {
            count++;
        } else {
            answer.push(count);
            current = completed[i];
            count = 1;
        }
    }
    
    answer.push(count);
    
    return answer;
}