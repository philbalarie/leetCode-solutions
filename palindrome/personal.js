const isPalindrome = (x) => x.toString().split('').reverse().join('') === x.toString()

const result = isPalindrome('121')

console.log(result)