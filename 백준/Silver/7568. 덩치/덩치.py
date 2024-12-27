n = int(input())

person = [list(map(int, input().split())) for i in range(n)]

answer = []
for i in range(n):
    rank = 0
    for j in range(n):
        if person[i][0] < person[j][0] and person[i][1] < person[j][1]:
            rank += 1
    answer.append(rank+1)

for i in answer:
    print(i, end=" ")