n = int(input())

cnt = 1
answer = 1

while cnt < n:
    cnt += 6 * answer
    answer += 1

print(answer)