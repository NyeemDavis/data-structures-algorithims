// Given an array of 'n' elements and a target element
// 't', find the index of t in the array. Return -1 if the target element is not found


// Solution

function linearSearch(arr, t) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] == t) {
            return i
        }
    }
    return -1
}

// Big-O = O(n)

console.log(linearSearch([-5, 2, 10, 4, 6], 10))
console.log(linearSearch([-5, 2, 1, 4, 6], 10))
