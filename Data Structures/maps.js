// An unordered collection of key-value paris. Both keys and values can be of any data type
// To retrieve a value you can use the correspoding key
// Maps are iterables, they can be used with a for of loop

// Maps vs Object
// Objects are unordered, maps are ordered
// Keys in objects can only be string or symbol whereas in maps they can be of any type
// An object has a prototype and may contain a few default keys which may collide with your own keys if not careful. A map on the other hand does not contain any keys by default.
// Maps are restricted to only storing data

const map = new Map([['a', 1], ['b', 2]]) // a and b are the keys

for(const [key, value] of map) {
    console.log(`${key}: ${value}`)
}

// map.set() not the same as set data structure
// map.has() check if there is a key
// map.delete() deletes key
// map.size() see how many key value pairs there are
// map.clear() removes all key value pairs