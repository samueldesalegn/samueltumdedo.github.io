// Q1

let el4 ={

value: 'apple',

next: null

};

let el3 = {

value: 'banana',

next: el4

};

let el2 = {

value: 'apple',

next: el3

};

let list = {

value: 'apple',

next: el2

};

// a. Get the count of occurrences of given target
/**
 * 
 * @param {*} list 
 * @param {*} str 
 * @returns 
 */
function countOccurences(list, str) {
	if (!list) return 0;
	let count =0;
	if (list) {
		count = (list.value === str)? 1 : 0;
		count += countOccurences(list.next, str);
		
	}

	return count;
}

console.log(countOccurences(list,'apple'));//3

console.log(countOccurences(list,'banana'));//1

// b. Insert new node,'pear' after 'bananna'

function addNodeAfter(list, nodeN, newNode) {
	if (!list) return;

	if (list.value === nodeN) {
		let temp = list.next;
		list = {list :newNode, next: temp};
		return;
	} else {

		addNodeAfter(list.next, nodeN, newNode);
	}
}

addNodeAfter(list, 'banana', 'Pear');

// console.log(JSON.stringify(list));

//{"value":"apple","next":{"value":"apple","next":{"value":"banana","next":{"value":"Pear","next":{"value":"apple","next":null}}}}}

// Q2
// 1. For the below tree, find the parent nodes with child count. 
function getParentChild(abe){
	if (!abe) return {};
	let childCount = {};
	let count = (abe.next)? 1: 0;
	

	for (const child in abe) {
		count += getParentChild(child);
		childCount[child] = count;
	}
	return childCount;

}


// If I add one more node, lisachild to lisa, i.e 

// lisa.descendents.push(new TreeNode('Lisa'));

// console.log(getParents(abe));//{ Abe: 1, Homer: 3, Lisa: 1 }

function TreeNode(value) {

	this.value = value;

	this.descendents = [];

}

// create nodes with values

const abe = new TreeNode('Abe');

const homer = new TreeNode('Homer');

const bart = new TreeNode('Bart');

const lisa = new TreeNode('Lisa');

const maggie = new TreeNode('Maggie');

// associate root with is descendents

abe.descendents.push(homer);

homer.descendents.push(bart, lisa, maggie);
// console.log(getParentChild(abe));//{ Abe: 1, Homer: 3 }



// Q3

/**
 * 
 * @param {*} json1 
 * @returns 
 */
function flatten(json1) {
	

	let obj = {};
	for (const key in json1) {
		if (typeof json1[key] === 'object') {
			return json1;
			// return `${key}${json1[key]}`;
		}
		
		obj[key]= flatten(json1[key]);
	}
	return obj;
}

let json2 = {a:2, x:{b:2,c:{d:4,z:5}}}

console.log(flatten(json2));//{ a: 2, xb: 2, cd: 4, z: 5 }

let json = {a:{b:2,x:4,c:{d:4}}}

console.log(flatten(json));//{ ab: 2, x: 4, cd: 4 }
