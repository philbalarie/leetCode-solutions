def twoSum(nums, target):
    prevMap = {} # val : index

    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i
    return

result = twoSum([0, 1, 2, 3, 4], 7)
print(result)
