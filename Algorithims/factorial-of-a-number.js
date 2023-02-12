// Given an interger "n" fine the factorial of that interger
// Produc of all positive intergers less than or equal to 0
// Factorial of 0 is 1

// Solution
function factorial(n) {
    let factorial = n
    if(n = 0) return 1 
    for(i = n - 1; i > 0; i--){
       factorial = factorial * i
    }
    return factorial
}

//Big-O = O(n)

factorial(4) // 4 * 3 * 2 * 1 = 24
factorial(5) // 5 * 4 * 3 * 2 * 1 = 120