// Give a number 'n', find the nth element in the fibonacci sequence

// Solution

function recursiveFibonacci(n) {
    if(n < 2) return n
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

// Big-O = O(n)

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8