// Given an array of intergers, sort the array

function bubbleShort(arr) {
    let swapped
    do {
        swapped = false
        for(i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while(swapped)
    return arr
}

// Time complexity: Big-O O(n^2)

console.log(bubbleShort([-6, 20, 8, -2, 4])) // -6, -2, 4, 8, 20