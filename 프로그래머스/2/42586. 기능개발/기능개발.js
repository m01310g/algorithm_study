function solution(progresses, speeds) {
    var answer = [];
    const completed = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));   // 각각의 완료일 계산
    
    let curr = completed[0];
    let cnt = 1;
    
    for (let i = 1; i < completed.length; i++) {
        if (completed[i] <= curr) cnt++;    // 기준일보다 작거나 같으면 cnt + 1 
        else {  // 기준일보다 크면 push, 기준일 갱신
            answer.push(cnt);
            curr = completed[i];
            cnt = 1;
        }
    }
    answer.push(cnt);
    
    return answer;
}