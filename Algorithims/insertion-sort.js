function insertsionSort(arr) {
    for(i = 1; i < arr.length; i++) {
        let inserstion = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > inserstion) {
            j = j - 1
        }
        arr[j + 1] = inserstion
    }
}

// Time Complexity: Big-O O(logn)

const arr = [8, 20, -6, 4, -2]
console.log(insertsionSort(arr))