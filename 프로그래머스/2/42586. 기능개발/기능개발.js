function solution(progresses, speeds) {
    var answer = [];
    const completed = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    let count = 1;
    let curr = completed[0];
    
    for (let i = 1; i < completed.length; i++) {
        if (completed[i] <= curr) count++;
        else {
            answer.push(count);
            curr = completed[i];
            count = 1;
        }
    }
    
    answer.push(count);
    
    return answer;
}