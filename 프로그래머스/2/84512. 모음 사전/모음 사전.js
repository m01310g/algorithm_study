function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"];
    let order = 0;
    let multiplier = [781, 156, 31, 6, 1];
    
    for (let i = 0; i < word.length; i++) {
        const index = vowels.indexOf(word[i]);
        order += index * multiplier[i] + 1;
    }
    
    return order;
}