function solution(s){
    var answer = true;
    let count = 0;
    
    if (s[0] === ")") return false;
    
    for (const char of s) {
        if (char === "(") count++;
        else count--;
        
        if (count < 0) return false;
    }

    return count === 0;
}