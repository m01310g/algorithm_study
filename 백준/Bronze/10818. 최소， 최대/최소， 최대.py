import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().rstrip().rsplit()))

print(min(arr), max(arr))