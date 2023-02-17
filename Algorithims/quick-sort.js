// Given an array of intergers, sort an array. Desceding or ascending

function quickSort(arr) {
 if(arr.length < 2) return arr
 let pivot = arr[arr.length - 1]
 let left = []
 let right = []
 for(i = 0; i < arr.length - 1; i++) {
    if(arr[i] < pivot) {
        left.push(arr[i])
    } else if(arr[i] > pivot) {
        right.push(arr[i])
    }
 }
 return [...quickSort(left), pivot, ...quickSort(right)]
}

// Time Complexity: Big-O O()

console.log(quickSort([-6, 20, 8, -2, 4]))