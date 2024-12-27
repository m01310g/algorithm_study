from sys import stdin
input = stdin.readline

n = int(input().rstrip())

time = [list(map(int, input().split())) for _ in range(n)]
time_sorted = sorted(time, key=lambda x: (x[1], x[0]))

answer = 0
current_end = 0

for start, end in time_sorted:
    if start >= current_end:
        answer += 1
        current_end = end

print(answer)