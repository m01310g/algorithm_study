function solution(absolutes, signs) {
    const arr = [];
    
    for (let i = 0; i < absolutes.length; i++) {
        if (!signs[i]) arr.push(absolutes[i] * (-1));
        else arr.push(absolutes[i]);
    }
    
    const answer = arr.reduce((acc, curr) => acc + curr);
    return answer;
}