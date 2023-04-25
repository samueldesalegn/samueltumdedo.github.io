let name = document.getElementById('name');
let pwd = document.getElementById('pwd');
let form = document.getElementById('form');
let errorE = document.getElementById('error');


form.addEventListener('submit', (e) => {
	let message = [];
	if (name.value === '' || name.value === null) {
		message.push("Name is required");
	}

	if (pwd.value.length <= 6) {
		message.push("Password must be greater than 6");
	}

	if (pwd.value.length <= 20) {
		message.push("Password must be less than 20");
	}

	if (pwd.value === 'password') {
		message.push("Password cannot be password");
	}

	if (message.length > 0) {
		e.preventDefault();	
		errorE.innerText = message.join(', ');
	}
});