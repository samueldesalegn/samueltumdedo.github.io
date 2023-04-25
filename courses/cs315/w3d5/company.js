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
 */
function sumSalariesByDept(company){ 
	let deptSal = {};
	for (const key in company) {
		let dept = company[key];
		let sum = 0;
		if (Array.isArray(dept)) {
			sum += dept.reduce((prev, emp) =>prev + emp.salary, 0);
			deptSal[key] = sum;
		}	else {
			deptSal = Object.assign(sumSalariesByDept(dept), deptSal);
		}
	}
	return deptSal;
}

// console.log(sumSalariesByDept(company));

//function avg Salary By Department
/**
 * 
 * @param {*} company 
 * @returns 
 */
function avgSalByDept(company) {
let deptAvgSal = {};
for (const key in company) {
	let sum = 0;
	let dept = company[key];
	if (Array.isArray(dept)) {
		sum += dept.reduce((prev, emp) => prev + emp.salary, 0);
		deptAvgSal[key] = sum/dept.length;
	} else {
		deptAvgSal = Object.assign(avgSalByDept(dept), deptAvgSal);
	}
}
return deptAvgSal;
}

console.log(avgSalByDept(company));

//maximum Salary of the company
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
			let deptMax = dept.reduce((prev, emp) => prev>emp.salary? prev: emp.salary, dept[0].salary);
			max = max>deptMax? max : deptMax;	
		} else {
			max = maxSalary(dept);
		}
	}
	return max;
}

// console.log(maxSalary(company));

// Salaries above a given threshold

/**
 * 
 * @param {*} company 
 * @returns 
 */
function empSalG1k(company) {
	if (Array.isArray(company)) {
		return company.filter(emp =>emp.salary>1300);

	}
	let arr = [];
	for (const key in company) {
		arr.push(...empSalG1k(company[key]));
	}

	return arr;
}

// console.log(empSalG1k(company));

// All the employees of the company

/**
 * 
 * @param {*} company 
 * @returns 
 */
function empNames(company) {
	if (Array.isArray(company)) {
		return company.map(emp => emp.name);
	}

	let arr = [];
	for (const key in company) {
		arr.push(...empNames(company[key]));
	}

	return arr;
}

// console.log(empNames(company));


// Total salary of the company for a given period

/**
 * 
 * @param {*} company 
 * @returns 
 */
function totalSalary(company) {
  if (Array.isArray(company)) {
		return company.reduce((prev, emp) => prev + emp.salary, 0);
  }

  let sum = 0;
  for (const key in company) {
		sum += totalSalary(company[key]);
  }
  return sum;
}

console.log(totalSalary(company));

// /**
//  * 
//  * @param {*} company 
//  * @returns 
//  */
// function maxSalaryByDept(company) {
// 	let maxSal = {};
// 	for (const key in company) {
// 		let dept = company[key];
// 		if (Array.isArray(dept)) {
// 			let deptMax = dept.reduce((prev, emp) => prev>emp.salary? prev: emp.salary, dept[0].salary);
// 			maxSal[key] = deptMax;	
// 		} else {
// 			maxSal = Object.assign(maxSalaryByDept(dept), maxSal);
// 		}
// 	}
// 	return maxSal;
// }
// console.log(maxSalaryByDept(company));



function maxSalaryByDept(company) {
	let maxSal = {};
	for (const key in company) {
		let dept = company[key];
		// let sum = 0;
		if (Array.isArray(dept)) {
			let max = dept.reduce((prev, emp) => prev>emp.salary? prev : emp.salary, dept[0].salary );

			maxSal[key] = max;
		}else {
			maxSal = Object.assign(maxSalaryByDept(dept), maxSal);
		}
	}
	return maxSal;
}

// console.log(maxSalaryByDept(company));





