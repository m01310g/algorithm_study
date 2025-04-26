function solution(progresses, speeds) {
    const day = [];
    const count = [];

    for (let i = 0; i < progresses.length; i++) {
        day.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let standard = day[0];
    let cnt = 1;
    
    for (let i = 1; i < day.length; i++) {
        if (standard >= day[i]) {
            cnt++;
        } else {
            count.push(cnt);
            standard = day[i];
            cnt = 1;
        }
    }
    
    count.push(cnt);
    return count;
}