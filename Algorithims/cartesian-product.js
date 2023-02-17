// Given two finite non-empty sets, find their Cartesian product


function cartesianProduct(a, b) {
    let AxB = []
    for(i = 0; i < a.length; i++) {
        for(j = 0; j < b.length; j++) {
         AxB.push([a[i], b[j]])
        }
    }
    return AxB
}

// Time complexity: O(mn)

console.log(cartesianProduct([10, 11], [12, 13, 14]))