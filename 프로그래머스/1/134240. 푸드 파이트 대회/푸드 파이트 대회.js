function solution(food) {
    var answer = '';
    let str = '';
    for (let i = 1; i < food.length; i++) {
        const n = food[i] / 2;
        if (n === 0) continue;
        str = str + i.toString().repeat(n);
    }
    
    answer = str + "0" + str.split("").reverse().join("");
    return answer;
}