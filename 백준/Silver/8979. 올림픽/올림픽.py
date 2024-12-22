# 1번 조건: 금메달 수가 더 많은 나라
# 2번 조건: 금메달 수가 같으면, 은메달 수가 더 많은 나라
# 3번 조건: 금, 은메달 수가 모두 같으면, 동메달 수가 더 많은 나라

n, k = map(int, input().split())
medal_info = [list(map(int, input().split())) for _ in range(n)]

medal_info.sort(key=lambda x: (x[1], x[2], x[3]), reverse=True)
idx = [medal_info[i][0] for i in range(n)].index(k)

for i in range(n):
    if medal_info[idx][1:] == medal_info[i][1:]:
        print(i+1)
        break