inputs: list[tuple[str, str]] = [x[:-1].partition(': ')[0::2] for x in open('./day 2/input.txt').readlines()]
valid = 0
for x in inputs:
    bounds, _,  character = x[0].partition(' ')
    lowerbound, _ , upperbound = (int(x) if x != '-' else _ for x in bounds.partition('-'))
    if lowerbound <= x[1].count(character) <= upperbound:
        valid += 1

print(valid)