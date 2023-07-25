from itertools import combinations
from collections import Counter
def solution(orders, course):
    res = []
    for x in course:
        counter = Counter()
        for order in orders:
            cb = Counter(combinations(sorted(order), x))
            counter += cb
        if not counter: continue
            
        sortedCounter = counter.most_common()
        maxCnt = sortedCounter[0][1]
        for tup, cnt in sortedCounter:
            if cnt == maxCnt and maxCnt > 1:
                res.append("".join(list(tup)))
            else: 
                break
    return sorted(res)