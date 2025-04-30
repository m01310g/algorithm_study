function solution(absolutes, signs) {
    const res = [];
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) res.push(absolutes[i]);
        else res.push(absolutes[i] * (-1));
    }
    
    return res.reduce((a, b) => a + b);
}