function solution(routes) {
    // 나가는 순서대로 정렬
    routes.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let position = -30001;
    
    for (const [entry, exit] of routes) {
        if (position < entry) {
            count++;
            position = exit;
        }
    }
    return count;
}