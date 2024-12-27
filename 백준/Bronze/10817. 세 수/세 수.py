from sys import stdin

num = list(map(int, stdin.readline().split()))
num.sort()

print(num[1])