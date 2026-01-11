function solution(n, arr1, arr2) {
    var answer = [];
    
    const a1 = arr1.map((v) => v.toString(2).padStart(n, "0"));
    const a2 = arr2.map((v) => v.toString(2).padStart(n, "0"));
    
    const result = a1.map((v, i) => {
        let res = "";
        
        for (let j = 0; j < n; j++) {
            res += (v[j] === "1" || a2[i][j] === "1") ? "#" : " ";
        }
        
        return res;
    });
    
    answer = result;
    
    return answer;
}