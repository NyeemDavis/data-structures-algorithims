// Given an assorted array of 'n' elements and a target element 't', find the index of t in the array. Return -1 if the element is not found


function recursiveBinarySearh(arr, target) {
 return search(arr, target, 0, arr.length - 1)
}

// Helper function 
function search(arr, target, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]) return middleIndex


    return target < arr[middleIndex] ? search(arr, target, leftIndex, middleIndex - 1) : search(arr, target, middleIndex + 1, rightIndex)
}

// Time Complexity: O(logn)

console.log(recursiveBinarySearh([-5, 2, 3, 6, 10], 10)) // 4
console.log(recursiveBinarySearh([-5, 2, 4, 6, 10], 6)) // 3