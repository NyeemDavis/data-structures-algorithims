// A data structure that can hold a collection of values.
// Must be unique, can mix other data tyes
// No insertion order, iterable. Can be used in a loop

// Insertion order is kept with arrays but not with sets
// Searching is faster in a set than in an array

const set = new Set([1, 2, 3])
set.add(4)


for(const item of set) {
    console.log(item)
}

// set.add() 
// set.has()
// set.delete()
// set.size()
// set.clear()