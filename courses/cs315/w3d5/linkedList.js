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

// 1. Print All nodes or values
/**
 * 
 * @param {*} list 
 */

function printNodes(list) {
	if (list) {
		console.log(list.value);
		printNodes(list.next);
	}
}
// printNodes(list);

// 2. Print the nodes in a reverse way
/**
 * 
 * @param {*} list 
 * @returns 
 */
function printReverse(list) {
	if (!list) return "";
	return `${printReverse(list.next)} \n ${list.value}`;
}

// console.log(printReverse(list));

//Append all nodes

/**
 * 
 * @param {*} list 
 * @returns 
 */
function appendValues(list) {
	let values = '';
	if (list) {
			let separator = list.next ? '->' : '';
			values += `${list.value} ${separator} ${appendValues(list.next)}`;
	}
	return values;
}
// console.log(appendValues(list));//1->2->3->4

// Count Nodes of the list
/**
 * 
 * @param {*} list 
 */
function countNodes(list) {
	if (!list) return 0;
	return 1 + countNodes(list.next);
}

// console.log(countNodes(list));

// Check the given node exists in the list
/**
 * 
 * @param {*} list 
 * @param {*} nodename 
 */
function nodeContains(list, nodename) {
	if (!list) return false;
	return (list.value === nodename) || nodeContains(list.next, nodename);
}

// console.log(nodeContains(list, 3));
// console.log(nodeContains(list, 5));

//Print an array of node names
/**
 * 
 * @param {*} list 
 */
function myArrayNodes(list) {
	let arr =[];
 if (list) {
	arr.push(list.value);
	arr.push(...myArrayNodes(list.next));
 }
 return arr;
}
// console.log(myArrayNodes(list));

// Adding nodes to the list

/**
 * 
 * @param {*} list 
 * @param {*} nodeName 
 * @param {*} newNode 
 * @returns 
 */
function addNodeAfter(list, nodeName, newNode) {
	if (!list) return;
	if (list.value === nodeName) {
		let temp = list.next;
		list.next = {value:newNode, next: temp};
		return;
	}
	return addNodeAfter(list.next, nodeName, newNode);
}

// addNodeAfter(list, 2, 'New Node');
// console.log(list);

/**
 * 
 * @param {*} list 
 * @param {*} nodeName 
 * @returns 
 */
function subList(list, nodeName) {
	if (!list) return;
	return (list.value == nodeName)? list : subList(list.next,nodeName);
}

// console.log(subList(list, 2));






