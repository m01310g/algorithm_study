function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    cities = cities.map((v) => v.toLowerCase());
    
    if (cacheSize === 0) {
        answer = cities.length * 5;
        return answer;
    }
    
    for (const city of cities) {
        if (cache.includes(city)) {
            answer += 1;
            const idx = cache.indexOf(city);
            cache.splice(idx, 1);
            cache.push(city);
        } else {
            answer += 5;
            if (cache.length === cacheSize) {
                cache.shift();
                cache.push(city);
            } else {
                cache.push(city);
            }
        }
    }
    
    return answer;
}