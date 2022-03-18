// https://www.youtube.com/watch?v=KLlXCFG5TnA&t=320s
const twoSum = (nums, target) => {
    const numHash = {}
    const res = []

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const remaining = target - num
        if (numHash[remaining] !== undefined) { // Since 0 cound bee a correct result
            res.push(numHash[remaining]) // index of value found in the hash
            res.push(index) // index of actual value
            break
        }
            numHash[num] = index
    }

    return res
}

const result = twoSum([2, 7, 11, 15], 9)