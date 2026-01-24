function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    
    for (let h = 3; h < brown; h++) {
        const w = total / h;
        const inner = (w - 2) * (h - 2);
        
        if (Number.isInteger(w) && w >= h && yellow === inner) answer = [w, h];
    }
    return answer;
}