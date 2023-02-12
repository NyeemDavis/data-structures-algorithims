// Given an interger 'n', find the factorial of that interger


// Solution
function recursiveFactorial(n) {
    if(n === 0 || n === 1) return 1
    return n = n * (recursiveFactorial(n - 1))
}

// Big-O = O(n)


console.log(recursiveFactorial(4)) // 24
console.log(recursiveFactorial(5)) // 120