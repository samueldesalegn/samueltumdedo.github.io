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
// Get the sum of salaries by department
/**
 * 
 * @param {*} company 
 * @returns 
 */
function sumSalariesByDept(company){
	// console.log(company)
 let deptSalary = {};
	for(let deptName in company){
			let dept = company[deptName];
			let sum = 0;
			if(Array.isArray(dept)){
					sum+=dept.reduce(function(prev,emp){
							return prev+emp.salary;
					},0);
					deptSalary[deptName]=sum;
			}else{
					// console.log(deptSalary);
					deptSalary = Object.assign(sumSalariesByDept(dept),deptSalary);
			}
	}
	return deptSalary;
}
// console.log( sumSalariesByDept(company));

/**
 * 
 * @param {*} company 
 * @returns 
 */
function avgSalByDept(company) {
	let deptSal = {};
	for (const key in company) {
		let dept = company[key];
		let sum = 0;
		if (Array.isArray(dept)) {
			sum += dept.reduce((prev, emp) => prev + emp.salary, 0);
			deptSal[key] = sum/dept.length;
		}else {
			deptSal = Object.assign(avgSalByDept(dept), deptSal);
		}
	}
	return deptSal;
}

// console.log(avgSalByDept(company));

/**
 * 
 * @param {*} company 
 * @returns 
 */
function maxSalary(company) {
	let max = 0;
	for (const key in company) {
		let dept = company[key];
		
		if (Array.isArray(dept)) {
		let deptMax = dept.reduce((prev, emp) => prev<emp.salary? emp.salary :prev, dept[0].salary );
		max = max>deptMax? max : deptMax;
	} else {
		max = maxSalary(dept);
	}
	}
	return max;
}

console.log(maxSalary(company));

/**
 * 
 * @param {*} company 
 * @returns 
 */
function empSalG1k(company) {
	if (Array.isArray(company)) {
		return	company.filter(elem => elem.salary > 1000);
		
	}else {
		// let sum = 0;
		let arr = [];
		for (let key in company) {
			arr.push(...empSalG1k(company[key]));
		}

		return arr;
	}
}

console.log(empSalG1k(company));

