// Frequency Counter example

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (const element of str1) {
        lookup[element]? lookup[element] += 1 : lookup[element] = 1;
    }

    for (const element of str2) {
        if (!lookup[element]) {
            return false;
        } else {
            lookup[element] -= 1; 
        }
    }
    return true;
}

// console.log(validAnagram('anagram', 'nagaram'));

/*
POinter Example
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair
where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
*/

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }else if (sum>0){
            right--;
        }else {
            left++;
        }
    }
}
// let arr = sumZero([-5, -4, -2, -1, 0, 1, 2, 3, 6]);
// console.log(arr);

/**
 * Count UNique value challenge: 
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.
 */

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }  
    }
    return i+1;
 
}

// let count = countUniqueValues([-4, -3, -3, -2, -1, 0, 1, 2, 2, 6, 7]);
// console.log(count);

/**
 * Sliding window pattern
 * Example
 * Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate
 * the maximum sum of n consecutive elements in the array.
 */

function maxSubArraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < n) return null;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]; 
    }
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum); 
    }
    return maxSum;
}
// let sum = maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// console.log(sum);

/**
 * Divide and Conquer
 * This pattern involves dividing a data set into smaller chunks and then repeating a process
 * with a subset of data. This pattern can tremendously decrease time complexity.
 * 
 * Given a sorted array of integers, write a function called search, that accepts a value and returns the index
 * where the value passed to the function is located. If the value is not found, return -1.
 */

function search(arr, n) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max)/2);
        let current = arr[mid];
        if (current < n) {
            min = mid + 1;
        } else if (current > n) {
            max = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

let i = search([2, 3, 5, 6, 9], 9);
// console.log(i)

/**
 * Same Frequency
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits
 * Your solution must have time complexity of O(N)
 */
function sameFrequency(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (const element of str1) {
        lookup[element]? lookup[element] += 1 : lookup[element] = 1;
    }

    for (const element of str2) {
        if (!lookup[element]) {
            return false;
        } else {
            lookup[element] -= 1; 
        }
    }
    return true;
}
// let bool = sameFrequency(182, 281);
// console.log(bool);

/**
 * areThereDuplicates
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are duplicates
 * among the arguments passed in. You can solve this using the frequency counter or multiple pointer pattern
 * time complexity O(N)
 * Space complexity O(N)
 */



function areThereDuplicates() {
    let arr = [...arguments]
    if(arr.length === 0){
        return false
    }
  
    let counter = {};
  
    for (const element of arr){
        counter[element] ? counter[element] += 1 : counter[element] = 1
    }
  
     let values = Object.values(counter)
     for (const element of values){
       if(element > 1){
         return true
       }
     }
    return false
  
  }
// let bool = areThereDuplicates(1, 2, 1);
// console.log(bool);

/**
 * averagePair - Multiple Pointers
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values
 * in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 * Bonus Constraints:
 * time: O(N)
 * space: O(1)
 */
function averagePair(arr, n) {
    let begin = 0;
    let end = arr.length -1;
    while (begin < end) {
        let avg =(arr[begin] + arr[end])/2;
        if (avg === n) return true;
        else if (avg < n) begin++;
        else end--;    
    }
    return false;
}
// let bool = averagePair([1, 2, 3, 4, 6, 8], 1);
// console.log(bool);

function capitalizeFirst(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }
    let arr2 = capitalizeFirst(arr.slice(0, -1));
        arr2.push(arr.slice(arr.length-1)[0].toUpperCase())
     
    return arr2;
}
// console.log(capitalizeFirst(['car', 'taco', 'banana']));

/**
 * Linear Search
 * Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. 
 * If the value does not exist in the array, return -1
 * Don't use indexOf to implement this funciton!
 */

function linearSearch(arr, val){
    if (arr.length === 0) return null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
 
    }
    return -1;

}

// console.log(linearSearch([10, 12, 15, 20, 25, 30], 15));

/**
 * 
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
Otherwise, it returns -1
 */

function binarySearch(arr, val) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        let m = Math.floor((i + j)/2);
        if (arr[m] < val) {
            i = m + 1;
        }else if (arr[m] > val) {
            i = m - 1;
        } else return m;
    }
    return -1

}
// console.log(binarySearch([10, 12, 15, 20, 25, 30], 15));

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0;  i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;  
        }
        
    }
    return count;
}
// console.log(naiveSearch("lorie loled", 'lo'));

/**
 * Telling JavaScript how to sort
 * 
 */
function numCompare(n1, n2) {
    return n1 - n2;
}

let sorted = [6, 4, 15, 10, 20].sort(numCompare);
// console.log(sorted)

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
let str = ['Steel', 'colt', 'Data Structures', 'Algorithms'].sort(compareByLen);
// console.log(str);

/**
 * Before we sort, we must swap
 * Many sorting algorithms involve some type of swapping functionality
 * (e.g. swapping to numbers to put them in order)
 */
// ES5
function swap1(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
// ES6 (2015)
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function naiveBubbleSort(arr) {
    for (let i = arr.length; i > 0 ; i--) {
        for (let j = 0; j < i - 1; j++) {
           if (arr[j] > arr[j+1]) {
            // SWAP
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
           }
        }  
    }
    return arr;
}
// console.log(naiveBubbleSort([37, 45, 29, 8]));

function bubbleSort(arr) {
    let noSwaps;
    for (let i = 0; i < arr.length ; i++) {
        noSwaps = true;
        for (let j = 0; j < arr.length - i; j++) {
           if (arr[j] > arr[j+1]) {
            // SWAP
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;
           }
        }  
        if (noSwaps) break;
    }
    return arr;
}
// console.log(bubbleSort([37, 45, 29, 8, 30]));

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            
        }
        // let temp = arr[i];
        // arr[i] = arr[lowest];
        // arr[lowest] = temp; 
        if (i !== lowest) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];  
        }
    }
    return arr;
}

// console.log(selectionSort([37, 45, 29, 7, 30, 13]));

/**
 * Insertion sort
 * Builds up the sort by gradually creating a larger left half which is always sorted
 * 
 */

function insertionSort(arr) {
    let i, j;
    for (i = 1; i < arr.length; i++) {
        let key = arr[i];
        for ( j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j+1] = arr[i];
        }  
        arr[j+1] = key;
    }
    return arr;
}
// console.log(insertionSort([8, 12, 37, 45, 29, 30]));

/***
 * Merge sort
 * A combination of merging and sorting
 */

// Merge the two arrays: left and right
function merge (arr1, arr2) {
    let arr = [], i = 0, j = 0;
  
    // We will concatenate values into the arr in order
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        arr.push(arr1[i]);
        i++; // move left array cursor
      } else {
        arr.push(arr2[j]);
        j++; // move right array cursor
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return arr
            .concat(arr1.slice(i))
            .concat(arr2.slice(j));
}

  // Merge Sort Implentation (Recursion)
function mergeSort (arr) {
    // No need to sort the array if the array only has one element or empty
    if (arr.length <= 1) {
      return arr;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(arr.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
}

//   let arr3 = [3, 5, 2, 9, 6, 10, 8, 20];
//   console.log(mergeSort(arr3));

//   function pivot(arr, start=0, end=arr.length-1) {
//     function swap(array, i, j) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     let pivot = arr[start];
//     let swapIndex = start;
//     for (let i = start + 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//            swapIndex++;
//            swap(arr, swapIndex, i) 
//         }   
//     }
//   }

/***
 * Quick Sort
 * Quick sort algorithm follows divide and conquer approach. 
 * It divides elements into smaller parts based on some condition and 
 * perform the sort operations on those divided smaller parts
 * 
 */
// ES2015 syntax
function pivot(arr, start=0, end=arr.length-1) {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    };
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1 ; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex-1);
        // right
        quickSort(arr, pivotIndex+1, right); 
    }
    return arr;
}

let arr2 = [3, 5, 2, 9, 6, 10, 8, 20];
let qsort = quickSort(arr2);
// console.log(qsort);

/**
 * Radix sort 
 * RADIX SORT HELPERS
 * In order to implement radix sort, it is helpful to build a few helper functions first:
 * getDigit(num, place) - returns the digit in num at the given place value
 */

function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

let dig = digitCount(7323);
// console.log(dig);

function mostDigits(nums) {
    let maxDigits = 0;
    for (const element of nums) {
        maxDigits = Math.max(maxDigits, digitCount(element));  
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (const element of nums) {
            digitBuckets[getDigit(element, k)].push(element);   
        }
        nums = [].concat(...digitBuckets);
        
    }
    return nums;
}

// console.log(radixSort([2090, 40, 930, 400, 2]))

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node(", how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;            
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse(){
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;   
    }
    unshift(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else {
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (found) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        }
        if (index === 0) return this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;

        return removed;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i<this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            
        }
        return this;
    }
}
// let list = new SinglyLinkedList();
// list.push("Hello");
// list.push("Goodbye");
// list.push("!");
// console.log(list.reverse());


/**
 * Doubly Linked List contains an extra pointer, typically called the previous pointer, together with
 * the next pointer and data which are there in the singly linked list
 * 
 */

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next =newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if (this.length === 0) return undefined;  
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next =null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        let current, count;
        if (index < 0 || index >= this.length) return null;
        if (index <= Math.floor(this.length/2)) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                current++;
            }  
            
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                current--;
            }
            
        }
        return current; 
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        let newNode = new Node(val);
        let prevNode = this.get(index-1);
        let nextNode = prevNode.next;
        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}
// let list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(20);
// list.push(24);
// list.push(8);

// // list.insert(0, "Harry");
// console.log(list.remove(0));

/**
 * STACKS
 * OBJECTIVES
 * 1. Define what a stack is
 * 2. Understand use cases for a stack
 * 3. Implement operations on a stack data structure
 * 
 * What is a stack?
 * A collection of data with a LIFO data structure principle
 * The last element added to the stack will be the first element removed from the stack
 * 
 * Where are stacks are used?
 * 1. Managing function invocations
 * 2. Undo/Redo
 * 3. Routing (the history object) is treated like a stack
 * 
 * BIG O OF STACKS
 * insertion - O(1)
 * remove = O(1)
 * search = O(N)
 * access = O(N)
 */

function factorial(x) {
    if (x === 0) return 1;
    return x*factorial(x-1);
}
let prod = factorial(4);
// console.log(prod);



/**
 * Push pseudocode
 * 1. The function should accept a value
 * 2. Create a new node with that value
 * 3. If there are no nodes in the stack, set the first and last property 
 * to be the newly created node
 * 4. If there is at least one node, create a variable that stores the current first property on the stack
 * 5. Reset the first property to be the newly created node
 * 6. Set the next property on the node to be the previously created variable
 * 7. Increment the size of the stack by 1
 * 
 * Pop Pseudocode
 * 1. If there are no nodes in the stack, return null;
 * 2. Create a temporary variable to store the first property on the stack
 * 3. If there is only 1 node, set the first and last property to be null
 * 4. If there is more than one node, set the first property to be the next property on the current first
 * 5. Decrement the size by 1
 * 6. Return the value of node removed
 * 
 */

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

/**
 * QUEUES
 * 
 * OBJECTIVES
 * 1. Define what a queue is
 * 2. Understand use cases for a queue
 * 3. Implement operations on a queue data structure
 * 
 * What is a Queue?
 * A FIFO Data Structure => First In First Out
 * 
 * Queues exist everywhere. Think about the last time you waited in line...
 * 
 * How do we use them in programming?
 * 1. Background tasks
 * 2. Uploading resources
 * 3. printing/Task processing
 * 
 * Enqueue Pseudocode
 * 1. The function accepts a value
 * 2. Create a new node using that value passed to the function
 * 3. If there are no nodes in the queue, set this node to be the first and last property of the queue.
 * 4. Otherwise, set the next property on the current last to be that node, and then set the last property
 * of the queue to be that node
 * 5. Increment the size of the queue by 1
 * 
 * 
 *  BIG O of QUEUES
 * insertion - O(1)
 * remove = O(1)
 * search = O(N)
 * access = O(N)
 * 
 * RECAP
 * 1. Queues are a FIFO data structure, all elements are first in first out
 * 2. Queues are useful for processing tasks and are foundational for more complex data structures
 * 3. Insertion and removal can be done in O(1)
 * 
 */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;

        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}