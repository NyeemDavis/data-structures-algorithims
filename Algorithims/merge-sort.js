// Given an array, sort an array
// Divide array into subarrays containing one element
// Repeadtly merge sub arrs to produce new sorted sub array until only one array remaining


function mergeSort(arr) {
 if(arr.length < 2) return arr
 const mid = Math.floor(arr.length / 2)
 const leftArray = arr.slice(0, mid)
 const rightArray = arr.slice(mid)
 return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArr, rightArr) {
    let sortedArr = []
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

// Time complexity: O(nlogn)

console.log(mergeSort([-6, 20, 8, -2, 4]))