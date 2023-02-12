// Given a positive interger "n" determine if the number is a power of 2 or not

function isPowerOfTwo(n) {
  if(n < 0) return false
  while( n < 1) {
    if(n % 2 !== 0) {
        return false
    }
    n = n / 2
  } 
}

//Big-O = O(log(n))

isPowerOfTwo(1) // true
isPowerOfTwo(2) // true
isPowerOfTwo(5) // false

function isPowerOfTwoBitWise() {
    if(n < 0) return false
    return (n & (n - 1)) === 0
}