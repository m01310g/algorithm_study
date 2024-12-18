function solution(participant, completion) {
    var answer = '';
    let dict = {};
    participant.forEach((p) => {
        if (p in dict) {
            dict[p] += 1;
        } else {
            dict[p] = 1;
        }
    });
    
    completion.forEach((c) => {
        if (c in dict) {
            dict[c] -= 1;
        }
    });
    
    Object.keys(dict).forEach((p) => {
        if (dict[p] === 1) answer = p;
    })
    return answer;
}