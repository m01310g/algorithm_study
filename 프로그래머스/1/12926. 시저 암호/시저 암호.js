function solution(s, n) {
    let answer = "";
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === " ") {
            answer += " ";
            continue;
        }
        
        const code = char.charCodeAt(0);
        
        if (char >= "A" && char <= "Z") {
            answer += String.fromCharCode((code - 65 + n) % 26 + 65);
        } else if (char >= "a" && char <= "z") {
            answer += String.fromCharCode((code - 97 + n) % 26 + 97);
        }
    }
    
    return answer;
}