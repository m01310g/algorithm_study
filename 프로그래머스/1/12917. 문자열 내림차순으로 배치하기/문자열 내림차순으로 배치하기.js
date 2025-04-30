function solution(s) {
    const arr = s.split("").map((val) => val.charCodeAt());
    arr.sort((a, b) => (b - a));
    
    return arr.map((val) => String.fromCharCode(val)).join("");
}