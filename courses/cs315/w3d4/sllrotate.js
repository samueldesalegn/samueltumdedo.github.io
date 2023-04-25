/**
 * 
 * ROTATE A SINGLY LINKED LIST
 * ALGORITHM
 * 1. Traverse the list from beginning and stop at kth node
 * 2. Store pointer of kth node in some variable (kthNode)
 * 3. Keep traversing till end and store pointer to last node also
 * 4. Finally:
 *      a. Change next of kth node to null
 *      b. change next of last node to head
 *      c. change head to (k+1)th node
 * 
 * SLL - Rotate Exercise
 * 
 * Implement the following on the Singly Linked List class
 * 
 * rotate
 * This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like
 * 1->2->3->4->5 and you rotate by 2, the list should be modified to 3->4->5->1->2. The number passed in to rotate can be any integer.
 */


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
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
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
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
    rotate(k) {
        if (k === 0 || k > this.length) return;
        let current = this.head;
        let count = 1;
        if (k>=1) {
            while (count < k && current !== null) {
                current = current.next;
                count++;
            }
            if (current === null) return;
            let kthNode = current;
            while (current.next !== null) {
                current = current.next;
                current.next = this.head;
                this.head = kthNode.next;
                kthNode.next = null;
            }
            
        } else if (k<0) {
            let last = this.head;
            let temp = this.head;
            k = Math.abs(k)
            
            while(k != 0){
                this.head = this.head.next;
                temp.next = null;
                last.next = temp;
                last = temp;
          
                
                temp = head;
                k--;
            }
        }
        return this;
    }

    rotate1(k){
 
     
    // if head is null or k==0 no rotation is required
    if(this.head == null || k == 0) return;
     
    // Making last point to the last-node of the given
    // linked list in this case 60
    while(last.next != null)
        last = last.next;
         
    // Rotating the linked list k times, one rotation at a
    // time.
}
 

    
}