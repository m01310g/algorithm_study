function solution(price, money, count) {
    let sum = 0;
    let nPrice = price;
    for (let i = 1; i <= count; i++) {
        nPrice = price * i;
        sum += nPrice;
    }
    
    return sum > money ? sum - money : 0;
}