/**
 * 
 * @param {*} x 
 * @param {*} n 
 * @returns 
 */
function pow(x, n) {
	return (n===1)? x : x*pow(x, n-1);
}
// console.log(pow(3, 3));

function power(x, n) {
	let prod = 1;
	for (let i = 0; i < n; i++) {
		prod *= x;
		
	}
	return prod;
}
// console.log(power(3, 3));
// recursive and iterative functions for n!
// 1. recursive
function factor(n) {
	return (n===0)? 1 : n * factor(n-1)
}

// console.log(factor(5));

// 2. Iterative
function factorialN(n) {
	let product = 1;
	for (let i = 1; i <= n; i++) {
		product *= i;
		
	}
	return product;
}
// console.log(factorialN(5));

function countLetter(str, chr) {
	let arr = str.split('');
	
// console.log(arr);
	if (arr.length === 0) return 0;
	let count = (arr[0] === chr)? 1 : 0;
	

	return count + countLetter(str.slice(1), chr)
	
}

// console.log(countLetter("pineapple", 'p'));

/**
 * 
 * @param {*} str 
 * @param {*} chr 
 * @returns 
 */
function countChar(str, chr) {
	
	if (str.length === 0) return 0;
	let count = (str.charAt(0) === chr)? 1: 0;

	return count + countChar(str.substring(1), chr);
	
}

// console.log(countChar('pineapple', 'p'));


function A(){
	console.log("A is called");
	console.log("Before B is called");
	B();
	console.log("After B is called")
	}
	function B(){
	console.log("B is called");
	console.log("Before C is called");
	C();
	console.log("After C is called");
	}
	function C(){
	console.log("C is called");
	}
	// A();
	// console.log("After A is called");


let company = { // the same object, compressed for brevity
	sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
	development: {
		sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
		internals: [{name: 'Jack', salary: 1300}]
	}
};

/**
 * 
 * @param {*} company 
 * @returns sum
 */
function sumSalaries(company) {
	if (Array.isArray(company)) {
		return company.reduce((accum, current) => accum + current.salary, 0);
		
	}else {
		let sum = 0;
		for (const dept of Object.values(company)) {
			sum += sumSalaries(dept);
		}

		return sum;
	}
}

// console.log(sumSalaries(company));

/**
 * 
 * @param {*} company 
 * @returns 
 */
function empNames(company) {
	if (Array.isArray(company)) {
		return	company.map(elem => elem.name);
		
	}else {
		// let sum = 0;
		let arr = [];
		for (let key in company) {
			arr.push(...empNames(company[key]));
		}

		return arr;
	}
}

// console.log(empNames(company));

let simpleObject = {a:1, b:2,c:{a:[1,2]}}
// 1. Count the keys

/**
 * 
 * @param {*} obj 
 * @param {*} keyL 
 * @returns 
 */
function countKeya(obj, keyL) {
	let count = 0;
	for (const key in obj) {
		if (key === keyL) {
		count++;	
		}
		let val = obj[key];
		if (typeof val === 'object') {
			count += countKeya(val, keyL)
		}
	}
	return count;
}
// console.log(countKeys(simpleObject, 'a')); //2


// countKeys(simpleObject)=> 5

// function countKeys(obj) {
// 	let count = 0;
// 	for (const key in obj) {
// 		if (key) {
// 			count++;	
// 		}
// 		let val = obj[key];
// 		if (typeof val === 'object') {
// 			count += countKeys(val)
// 		}
// 	}
// 	return count;
// }
// console.log(countKeys(simpleObject)); //6


const countKeys = function (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return 0;
  }
  const keys = Object.keys(obj);
  let sum = keys.length;
  keys.forEach(key => sum += countKeys(obj[key]));
  return sum;
};
// console.log(countKeys(simpleObject));
// 2. List all the leaf nodes//
// listLeaves(simpleObject)=> [ { a: 1 }, { b: 2 }, { d: [ 1, 2 ] } ]
// 3. List all the keys with given value
// NOTE: No need to do type conversions, I.e.convert from string to integer or viceversa, just do simple
// equals.
// findAllKeysWithGivenValue(simpleObject,1)=> [a,d]
// 4. List all the keys with matching key
// findValuesOfGivenKey(simpleObject,'a')=>[1,[1,2]]
/**
 * 
 * @param {*} arr 
 * @returns 
 */
function concatenate(arr) {
	if (arr.length === 0) {
		return '';
	}
	return arr[0]+concatenate(arr.slice(1));
}
let arr = ['apple', 'banana', 'grapes'];
// console.log(concatenate(arr));


let arr1 = [5,12,3,5,34,12]

const min = arr1 => {
  if (!arr1.length) { return 0 }
    if (arr1.length === 1) { return arr1[0]; }
    return Math.min(arr1[0], min(arr1.slice(1)));
}

/**
 * 
 * @param {*} arr 
 * @returns 
 */
function findMin(arr) {
	// if (arr.length === 0) return 0;
	if (arr.length === 1) return arr[0];
	
	return Math.min(arr[0], findMin(arr.slice(1)));
	
	
}
// console.log(findMin(arr1));
/**
 * 
 * @param {*} arr 
 * @returns 
 */
function findMax(arr) {
	if (arr.length === 0) return 0;
	if (arr.length === 1) return arr[0];
	
	return Math.max(arr[0], findMax(arr.slice(1)));
	
	
}

// console.log(findMax(arr1));


// 5. Find Last Index of the element in the array

function findLastIndexOf(arr, str) {
	if (arr.length === 0) return -1;
	if(arr.length ===1 && arr[0] === str) return 0;

	// let index = arr.lastIndexOf(str);

	return findLastIndexOf(arr.slice(1));
}
// console.log(findLastIndexOf(['apple', 'banana', 'apple'], 'apple'))//2



function findFirstIndexOf(arr, str) {
	if (arr.length === 0) return -1;
	if(arr.length ===1 && arr[0] === str) return 0;

	let index = findFirstIndexOf(arr.slice(1));
	if (index === -1 ) return index;
	return 1+index;
}
// console.log(findFirstIndexOf(['apple', 'banana', 'apple'], 'apple'))//2







