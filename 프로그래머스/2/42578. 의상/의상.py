def solution(clothes):
    answer = 1
    dict = {}
    for name, kind in clothes:
        if kind in dict:
            dict[kind] += [name]
        else:
            dict[kind] = [name]
    for _, value in dict.items():
        answer *= (len(value) + 1)
    return answer - 1