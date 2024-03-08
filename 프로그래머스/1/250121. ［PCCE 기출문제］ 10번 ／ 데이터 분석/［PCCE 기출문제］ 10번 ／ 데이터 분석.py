def solution(data, ext, val_ext, sort_by):
    data_list = {"code":0, "date":1, "maximum":2, "remain":3}
    filtered = [d for d in data if d[data_list[ext]] < val_ext]
    answer = sorted(filtered, key = lambda x: x[data_list[sort_by]])
    return answer