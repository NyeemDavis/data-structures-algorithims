// Given a sorted array of 'n' elements and a target element 't'
// find the index of 't' in the array, return -1 if not found

function binarySearch(n, t) {
   let leftIndex = 0
   let rightIndex = n.length - 1
   while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor(leftIndex + rightIndex) / 2
    if(target === n[middleIndex]) return middleIndex
    if(target < arr[middleIndex]) {
        rightIndex = middleIndex - 1
    } else {
        leftIndex = middleIndex + 1
    }
   }
   return - 1
}

// Big-O: O(logn)

binarySearch([-5, 2, 3, 6, 10], 10) // 4