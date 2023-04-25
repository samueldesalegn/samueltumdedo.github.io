/**
 * Tree Traversal
 * Traversing a Tree
 * Two Ways:
 * 1. Breadth-first Search
 * 2. Depth-first Search
 * 
 * BREADTH FIRST SEARCH (BFS)
 * visit every node once
 * STEPS - ITERATIVELY
 * 1. Create a queue (this can be an array) and a variable to store the values of the nodes visited
 * 2. Place the root node in the queue
 * 3. Loop as long as the there is anything in the queue
 *    a. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
 *    b. If there is a left property on the node dequeued - add it to the queue
 *    c. If there is a right property on the node dequeued - add it to the queue
 * 4. Return the variable that stores the values
 * 
 * 
 * DFS 
 * 1. InOrder
 * 
 * DFS - InOrder
 * 
 * Steps - Recursively
 * a. Create a variable to store the values of the nodes visited
 * b. Store the root of the BST in a variable called current
 * c. Write a helper function which accepts a node
 *   i.    If the node has a left property, call the helper function with the left property on the node.
 *   ii.   Push the value of the node to the variable that stores the values
 *   iii.  If the node has a right property, call the helper function with the right property on the node. 
 * d. Invoke the helper function with the current variable
 * e. Return the array of values
 * 2. Preorder
 * DFS - PreOrder
 * 
 * Steps - Recursively
 * a. Create a variable to store the values of the nodes visited
 * b. Store the root of the BST in a variable called current
 * c. Write a helper function which accepts a node
 *   i.   Push the value of the node to the variable that stores the values
 *   ii.  If the node has a left property, call the helper function with the left property on the node
 *   iii. If the node has a right property, call the helper function with the right property on the node.
 * d. Invoke the helper function with the current variable
 * e. Return the array of values
 * 
 * 
 * 3. Postorder
 *  DFS - PostOrder
 * 
 * Steps - Recursively
 * a. Create a variable to store the values of the nodes visited
 * b. Store the root of the BST in a variable called current
 * c. Write a helper function which accepts a node
 *   i.   If the node has a left property, call the helper function with the left property on the node
 *   ii.  If the node has a right property, call the helper function with the right property on the node. 
 *   iii. Push the value of the node to the variable that stores the values
 * d. Invoke the helper function with the current variable
 * e. Return the array of values
 * 
 * BFS or DFS? WHICH IS BETTER?
 * DFS
 * InOrder
 * => Used commonly with BST's
 * Notice we get all nodes in the tree in their underlying order
 * 
 * PreOrder - Can be used to export a tree structure so that it is easily reconstructed or copied
 * 
 * Trees RECAP
 * a. TREES are non-linear data structures that contain a root and child nodes
 * b. Binary trees can have values of any type, but at most two children for each parent
 * c. Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than its value
 *    and  every node to the right is greater
 * d. We can search through trees using BFS and DFS 
 */
/**
 * 
 */
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * @
 */
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
    