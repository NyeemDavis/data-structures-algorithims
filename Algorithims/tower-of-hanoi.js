// Move the entire stack to the last rod, obeying these rules
// Only one disk at a time
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod. And lastly,
// No disk may be placed on top of a disk that is smaller.

function towerOfHanoi(n, fromRod, toRod, usingRod) {
 if(n === 1) {
    console.log(`Moved disk 1 from ${fromRod} to ${toRod}`)
    return
 }
 towerOfHanoi(n - 1, fromRod, usingRod, toRod)
 console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
 towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

// Type Complexity: O(2^n)

console.log(towerOfHanoi(5, 'A', 'B', 'C')) 