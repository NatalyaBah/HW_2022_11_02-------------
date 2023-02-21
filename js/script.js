const press = document.querySelector('.calc');
let result = document.querySelector('#result');

press.addEventListener('click', function (event) {
	console.log(event.target);
	let value = event.target.textContent;
	result.textContent += value;
	switch (value) {
		case 'C':
			result.textContent = '';
			break;
		case '=':
			// result.textContent = eval(result.textContent)
			break;
		default:
			break;
	}
});
