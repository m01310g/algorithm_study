def solution(n):
    answer = 0
    lst = []
    for i in range(1, n):
        if n % i == 1:
            lst.append(i)
            
    answer = min(lst)
    return answer