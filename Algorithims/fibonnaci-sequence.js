// Give a number 'n', find the first 'n' elements of the Fibonacci sequence



// My solution 
function fibonacci(n) {
    let sequence = [0, 1]
    for(i = 2; i < n - 1; i++) { 
            sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence
}

// Time complexity
// Big-O = O(n)

fibonacci(2) 
fibonacci(3) 
fibonacci(7) 