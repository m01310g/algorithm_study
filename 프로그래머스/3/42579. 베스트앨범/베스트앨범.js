function solution(genres, plays) {
    var answer = [];
    const totalMap = {};
    const playMap = {};
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        totalMap[genre] = (totalMap[genre] || 0) + plays[i];
        
        if (!playMap[genre]) {
            playMap[genre] = [[i, plays[i]]];
        } else {
            playMap[genre].push([i, plays[i]]);
        }
    }
    
    const genreOrder =
          Object.entries(totalMap)
            .sort((a, b) => b[1] - a[1])
            .map(v => v[0]);
    
    for (const genre in playMap) {
        playMap[genre].sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1];
            return a[0] - b[0];
        })
    }
    
    for (const g of genreOrder) {
      const limit = Math.min(2, playMap[g].length);
        
        for (let i = 0; i < limit; i++) {
            answer.push(playMap[g][i][0]);
        }
    }
    
    return answer;
}