function solution(n, t, m, p) {
    var answer = '';
    const arr = [];
    const result = [];
    
    let i = 0;
    while(arr.length < t * m) {
        const num = i.toString(n).toUpperCase();
        arr.push(...num);
        i++;
    }
    
    for (let j = 0; j < t; j++) {
        result.push(arr[(p - 1) + j * m]);
    }
    
    answer = result.join("");
    
    return answer;
}