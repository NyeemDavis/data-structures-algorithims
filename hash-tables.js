// Used to store key value pairs
// Given a key, you can associate a value with that key for a very fast lookup
// Object class adds its own keys, keys that you input may confluct and overwrite the inherited default properties

// Writing your own hash table implementation is a very populat JS interview question

// Store key in value paris in a fixed size array
// Using a hasing function, accepting a string param, covert it into hash code using defined loginc and then maps it into numeric index that is within the bounds of the array

// Usage
// Constant time lookup an insertion
// Database indexing and caches

class HashTable {
    constructor(size) {
      this.table = new Array(size)
      this.size = size
    }
    
    hash(key) {
      // O(logn)
      let total = 0
      for(let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
      }
      return total % this.size
    }
    set(key, value) {
      const index = this.hash(key)
      // this.table[index] = value
      const bucket = this.table[index]
      if(!bucket) {
        this.table[index] = [[key, value]]
      } else {
        const sameKeyItem = bucket.find((item) => item[0] === key)
        if(sameKeyItem) {
          sameKeyItem[1] = value
        } else {
          bucket.push(key, value)
        }
    }
    }
  
    get(key) {
      const index = this.hash(key)
      // return this.table[index]
      const bucket = this.table[index]
      if(bucket) {
        const sameKeyItem = bucket.find((item) => item[0] == key)
        return sameKeyItem[1]
      }else {
        return undefined
      }
    }
    remove(key) {
      const index = this.hash(key)
      // this.table[index] = undefined
      const bucket = this.table[index]
      if(bucket) {
        const sameKeyItem = bucket.find((item) => item[0] === key) 
          bucket.splice(bucket.indexOf(sameKeyItem, 1))
        }
    }
  
    display() {
      for(let i = 0; i < this.table.length; i++) {
        if(this.table[i]) {
          console.log(this.table[i])
        }
      }
    }
  }
  
  const table = new HashTable(50)
  table.set('name', 'Nyeem')
  table.set('age', 18)
  table.display()
  
  table.set('name', 'Heidi')
  table.remove('name')
  table.display()