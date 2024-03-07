def solution(name, yearning, photo):
    answer = []
    for x in photo:
        score = 0
        for n in x:
            if n in name:
                score += yearning[name.index(n)]
        answer.append(score)
    return answer