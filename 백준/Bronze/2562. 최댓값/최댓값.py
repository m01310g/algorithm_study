import sys

input = sys.stdin.readline

arr = []
for i in range(9):
    num = int(input().rstrip())
    arr.append(num)

print(max(arr))
print(arr.index(max(arr)) + 1)