from sys import stdin

n = int(stdin.readline())

if n % 2:
    answer = 'SK'
else: answer = 'CY'

print(answer)