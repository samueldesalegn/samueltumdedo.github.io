let el4 =
{
    value: 4,
    next: null
};
let el3 =
{
    value: 3,
    next: el4
};
let el2 =
{
    value: 2,
    next: el3
};
let list =
{
    value: 1,
    next: el2
};
//Print All Nodes
/**
 * 
 * @param {*} list 
 */
function printValues(list) {
    if (list) {
        console.log(list.value);
        printValues(list.next);
    }
}
// printValues(list);
//Reverse print All Nodes

function myReverse(list) {
    if (list === null) return '';
    return `${myReverse(list.next)}\n ${list.value}`
}
console.log(myReverse(list));

//Append all nodes
function appendValues(list) {
    let values = '';
    if (list != null) {
        let separator = list.next ? '->' : ''
        values += list.value + separator + appendValues(list.next);
    }
    console.log(values)
    return values;
}
// console.log(appendValues(list))//1->2->3->4

//Count number of nodes
function countNodes(list) {
    if (!list) return 0;
    return 1 + countNodes(list.next)

}
// console.log(countNodes(list))//4
//Find If node exists

function nodeContains(list, nodename) {
    if (!list) return false;
    return (list.value === nodename) || nodeContains(list.next, nodename);
}

console.log(nodeContains(list, 3));
console.log(nodeContains(list, 5));


//Print an array of node names
function myArrayNodes(list) {
    let arr = [];
    if (list){
        arr.push(list.value);
        arr.push(...myArrayNodes(list.next));

    } 

    return arr;
    
}

// console.log(myArrayNodes(list));

//Add a new node after the particular node
/**
 * 
 * @param {*} list 
 * @param {*} nodeName 
 * @param {*} newNode 
 * @returns 
 */
function addNodeAfter(list, nodeName, newNode) {
    if (!list)
        return;
    if (list.value == nodeName) {
        let temp = list.next;
        list.next = { value: newNode, next: temp };
        return;
    }
    return addNodeAfter(list.next,nodeName,newNode);
}

//Print sub linked list
function myList(list, nodeName) {
    if (!list) return;
    return (list.value == nodeName)? list : myList(list.next,nodeName);
}

// console.log(myList(list, 3));
//{ value: 3, next: { value: 4, next: null } }

// function deleteNode(list, nodeName) {
//     if (!list) return;
//     if (list.value == nodeName) {
//         list.value = null;
//         list.next = list.next.next;
//         return;
//     }
//     return deleteNode(list.next,nodeName);
// }


let coach6 = { name: 'C6', next: null };
let coach5 = { name: 'C5', next: coach6 };
let coach4 = { name: 'C4', next: coach5 };
let coach3 = { name: 'C3', next: coach4 };
let coach2 = { name: 'C2', next: coach3 };
let coach1 = { name: 'C1', next: coach2 };

/**
 * 
 * @param {*} coach 
 */
function printNodes(coach1) {
    if (coach1) {
        console.log(coach1.name);
        printNodes(coach1.next);
    }
}

// // printNodes(coach1);
// let temp = list.next;
// list.next = null;
// list = temp;
// printNodes();


function deleteCs(coach1, nodeN) {
    if (!coach1) return;
    if (coach1.next.name === nodeN) {
        coach1.next = coach1.next.next;
        return;
    }
    return deleteCs(coach1.next, nodeN);
}

deleteCs(coach1, 'C3');
printNodes(coach1);

/**
 * 
 * @param {*} list 
 * @param {*} position 
 * @returns 
 */
// function deleteNode(list, position) {
     
//     // If linked list is empty
//     if (list == null) return;
     
//     // Store head node
//     let temp = list;
     
//     // If head needs to be removed
//     if (position == 0){
//         // Change head
//         list = temp.next;
//         return;
//     }
     
//     // Find previous node of the node to be deleted
//     for( let i = 0; temp != null && i < position - 1; i++)
//         temp = temp.next;
     
//     // If position is more than number of nodes
//     if (temp == null || temp.next == null)
//     return;
     
//     // Node temp->next is the node to be deleted
//     // Store pointer to the next of node to be deleted
//     let  next = temp.next.next;
     
//     // Unlink the deleted node from list
//     temp.next = next;
// }


function deleteNode(list, nodeName) {
    if (!list) return;

    let temp = list.next;
    if (list.value == nodeName) {
        list = null;
        return;
    }
    return deleteNode(list.next,nodeName);
}

deleteNode(list, 3);
printValues(list);
