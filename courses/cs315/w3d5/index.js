/**
 * 
 * @param {*} str 
 * @param {*} chr 
 * @returns 
 */
function countChar(str, chr) {
	let count = 0;
	if (str.length === 0) return 0;
	
  count = (str.charAt(0) === chr)? 1 : 0;
	
	return count + countChar(str.substring(1), chr);
	
}

// console.log(countChar('pineapple', 'p'));

let array = [1, 2, 3, 4];

function sum(array) {
	let sum = 0;
	for (let i of array) {
		sum += i;
	}
	return sum;
}
// sum(array);
// sum[n] =n+sum[n-1];

/**
 * 
 * @param {*} array 
 * @returns 
 */
function recursiveSum(array) {
    if (array.length == 0)
        return 0;
    // let firstElement = array[0];
    let subArray = array.slice(1);
    return array[0] + recursiveSum(subArray);
}

// console.log(recursiveSum(array));

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

function printNodes(root){
	console.log(root.value);
	for (const child of root.descendents) {
		printNodes(child);
	}
}

// printNodes(abe);

//deleteNode
/**
 * 
 * @param {*} root 
 * @param {*} nodeName 
 * @returns 
 */
function deleteNode(root,nodeName){
	for(let i=0;i<root.descendents.length;i++){
			if(root.descendents[i].value==nodeName)
			{
					root.descendents.splice(i,1);
					break;
			}else
					deleteNode(root.descendents[i],nodeName)
	}
	return;
}

// deleteNode(abe,'Lisa');
// console.log(JSON.stringify(abe));

/**
 * 
 * @param {*} str 
 * @returns 
 */
function reverse(str) {
	if (str.length === 0) return "";
	if (str.length === 1) return str.charAt(0);

	return str.charAt(str.length-1) + reverse(str.slice(0, str.length-1));
		
	
}

// console.log(reverse("apple"));