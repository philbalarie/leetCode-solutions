/**
* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
* You can return the answer in any order.
 * @param {*} nums 
 * @param {*} target 
 */

const twoSum = (nums, target) => {
    const res = []
    nums.forEach((num, index) => {
        if (!res.length) {
            nums.forEach((secondNum, secondIndex) => {
                if (index !== secondIndex) {
                    if (num + secondNum === target) {
                        res.push(index)
                        res.push(secondIndex)
                    }
                }
            })
        }
    });

    return res;
};

// possible results: [2, 3]
const result = twoSum([2, 7, 11, 15], 9)

console.log(result)
console.log('hello')