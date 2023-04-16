// grab the elements to change
let title = document.getElementById("title");
let para1 = document.getElementById("firstPara");
let para2 = document.getElementById("secondPara");
let btn = document.querySelectorAll('button')

// Define blue and red function
/**
 * styling the background of elements in the HTML to blue
 */
function blue() {
	let color = 'blue';
	
	title.style.background = color;
	para1.style.background = color;
	para2.style.background = color;
	btn[0].style.background = color;
	btn[1].style.background = color;
	// title.setAttribute('style', 'color: ' + color);
}

/**
 * styling the background of elements in the HTML to blue
 */
function red() {
	let color = 'red';
	
	title.style.background = color;
	para1.style.background = color;
	para2.style.background = color;
	btn[0].style.background = color;
	btn[1].style.background = color;
	// title.setAttribute('style', 'color: ' + color);
}


