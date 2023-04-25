let el4 = {
value: 4,
next: null};
let el3= {
value: 3,
next: el4};
let el2 = {
value: 2,
next: el3};
let list = { value: 1, next: el2 };

function printList(list) { 
	if (list) {
		console.log(list.value);
		printList(list.next)
	}
}



console.log(printList(list));

// // eslint-disable-next-line require-jsdoc
// function printCount(list) {
// 	// eslint-disable-next-line no-undef
// 	let temp = list.next;
// 	let count = 0;
// 	while (temp != null) {
// 			count++;
// 			temp = temp.next;
// 	}
// 	console.log(count);
// }
// printCount(list);


function printValues(list) {
	console.log(list.value + '->');
	if (list.next) {
		printValues(list.next)
	}
}
// console.log(printValues(list));


function printCount(list) {
	let count = 0;
	if (list === null) return 0;
  if (list) {
		count++;
	}
	count	+= printCount(list.next);
	return count;
	

}
// console.log(printCount(list));

let node1 = {data: 100};
let node2 = {data: 200};

node1.next = node2;

// console.log(node1);

// 1.1 Sum all numbers till the given one
// function sum(n) {
// 	if (n === 1) return 1;
// 	return n + sum(n-1);
// }
function sum(n) {
	return n*(n+1)/2;
}

// console.log(sum(10));

// 1.2 factorial n!

function factorial(n) {
	if (n===0) return 1;
	return n*factorial(n-1);
}
// console.log(factorial(5));

// 1.3 Fibonacci numbers (the dynamic programming solution is optional)

/**
 * 
 * @param {*} n 
 * @returns 
 */
function fibo(n) {
	if (n===0) return 0;
	if (n === 1) return 1;
	return fibo(n-1) + fibo(n-2);
}
// console.log(fibo(7));

function findLastIndex(arr, str){
	if (arr.length === 0) return -1;
	if (arr[arr.length -1] === str) return arr.length -1;
	let index = 0;
	index =findLastIndex(arr.slice(0,arr.length-2), str)
	return (index === -1)? index: 1 + index;
	
}

// console.log(findLastIndex(['apple', 'banana', 'apple'], 'apple'))//2

/**
 * 
 * @param {*} arr 
 * @param {*} str 
 * @returns 
 */
function findFirstIndex(arr, str){
	if (arr.length === 0) return -1;
	if (arr[0]=== str) return 0;

	let index = findFirstIndex(arr.slice(1), str);
	return (index === -1)? index : 1 + index;
}

let arr = ['lemon', 'apple', 'banana', 'apple'];
// console.log(findFirstIndex(arr, 'apple'));

/**
 * 
 * @param {*} str 
 * @param {*} chr 
 * @returns 
 */
function countChar(str, chr) {
	if (str.length === 0) return 0;
	return (str.charAt(0)=== chr)? 1 + countChar(str.substring(1), chr): countChar(str.substring(1), chr);

}

// console.log(countChar('apple', 'p'));

let company = {
	sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
	development: {
			sites: {
					agriculture: [{ name: 'John', salary: 1000 },
					{ name: 'Wengel', salary: 2000 }],
					infoTech: [{ name: 'Rajeev', salary: 9000 }, 
					{ name: 'Samuel', salary: 3000 }]
			},
			internals: [{ name: 'Jack', salary: 1300 }]
	}
};

/**
 * 
 * @param {*} company 
 * @returns 
 */
function salaryByDept(company){
	let deptSalary = {};
	for (const key in company) {
	//  let dept = company[key];
	let sum = 0;
	if (Array.isArray(company[key])) {
		sum += company[key].reduce((prev, emp)=> prev + emp.salary, 0);
		deptSalary[key] = sum;
	}else {
		deptSalary = Object.assign(salaryByDept(company[key]), deptSalary);
	}
	}
	return deptSalary;
}

// console.log(salaryByDept(company));





