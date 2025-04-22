function solution(s) {
    const arr = s.split(" ").map(String);
    const res = [];
    
    for (const str of arr) {
        res.push(str.charAt(0).toUpperCase() + str.toLowerCase().slice(1));
    }
    
    return res.join(" ");
}