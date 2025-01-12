import sys

input = sys.stdin.readline

n, m = map(int, input().rstrip().rsplit())

result = [int(0)] * n
for _ in range(m):
    i, j, k = map(int, input().rstrip().rsplit())
    result[i-1:j] = [k] * (j - i + 1)

for i in range(n):
    print(int(result[i]), end=" ")