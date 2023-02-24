// Non linear, compares to arrays, linked lists, stacks and queues which are all linear
// Quicker and easier access to data
// No loops or cycles

// Usage
// A family tree, DOM, chat bots, abstract syntax trees
// Parent Nodes, child nodes, leaf nodes, siblings, root node
// Ancestor node

// Binary Tree
// Each node has at most two children(left child and right child)
// Value of each left node must be smaller than parent node
// Value of each right node must be greater than the parent node

// Usage
// Searching, sorting, lookup tables and priority queues


// DFS
// Starts at the root and explores as far possible along each branch before backtracking
// Preorder, Inorder, Postorder

// BFS
// Explore all nodes at present depth prior to moving on to the nodes at the next depth level

class Node {  
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.depth = 0
    this.root = null
  }
  isEmpty() {
    return this.root === null
  }
  insert(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }
  insertNode(root, node) {
    if(node.value < root.value) {
     if(root.left === null) {
       root.left = node
     } else {
       this.insertNode(root.left, node)
     }
    } else {
      if(root.right === null) {
        root.right = node 
      } else {
        this.insertNode(root.right, node)
      }
    }
  }
  search(root, value) {
    if(!root) {
      return false
    } else {
      if(root.value === value) {
        return true
      } else if(value < root.value) {
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }
  preorder(root) {
    if(root) {
      console.log(root.value)
      this.preorder(root.left)
      this.preorder(root.right)
    }
  }
  inorder(root) {
    if(root) {
      this.inorder(root.left)
      console.log(root.value)
      this.inorder(root.right)
    }
  }
  postorder(root) {
    if(root) {
      this.postorder(root.left)
      this.postorder(root.right)
      console.log(root.value)
    }
  }
  levelOrder () {
    // Use optimized queue code
    // const newQueue = new Queue()
    // newQueue.enqueue(this.root)
    // while(newQueue.length) {
    //   let curr = newQueue.dequeue()
    //   console.log(curr.value)
    //   if(curr.left) {
    //     newQueue.enqueue(curr.left)
    //   }
    //   if(curr.right) {
    //     newQueue.enqueue(curr.right)
    //   }
    // }
    // console.log(newQueue)
    const queue = []
    queue.push(this.root)
    while(queue.length) {
      let curr = queue.shift()
      console.log(curr.value)
      if(curr.left) {
        queue.push(curr.left)
      }
      if(curr.right) {
        queue.push(curr.right)
      }
    }
  }
  min(root) {
    if(!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }
  
  max(root) {
    if(!root.right) {
      return root.value
    } else {
      return this.max(root.right)
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value)
  }
  deleteNode(root, value) {
    if(root === null) {
      return root
    }
    if(value < root.value) {
      root.left = this.deleteNode(root.left, value)
    } else if(value > root.value) {
      root.right = this.deleteNode(root.right, value)
    } else {
      if(!root.left && !root.right) {
        return null
      }
      if(!root.left) {
        return root.right
      } else if(!root.right) {
        return root.left
      }
      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right, root.value)
    }
    return root
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)

tree.levelOrder()
tree.inorder()
tree.delete(3)
tree.levelOrder()
 