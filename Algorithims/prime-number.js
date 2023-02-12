// Deteremine if 'n' is prime or not

// Solution
function isPrime(n) {
    if(n < 2) {
        return false
    }
    for(i = 2; i < Math.sqrt(n); i++) {
        if(n % i == 0) {
            return false
        }
    }
    return true
}

// Big-O = O(sqrt(n))

isPrime(5) // true
isPrime(4) // false