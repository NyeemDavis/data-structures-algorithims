// Given a staircase of 'n' steps, count the number of 
// distinct ways to climp to the top

function climbingStaircase(n) {
    const noOfWays = [1, 2]
    for(i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2] 
    }
    return noOfWays[n - 1]
}

// Type Complexity: O(n)

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))