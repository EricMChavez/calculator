let display = '';
let value1 = '';
let value2 = '';
let operation = '';
function input(btn) {
	display = display.concat(btn);
	refresh();
}
function refresh() {
	document.getElementById('display').innerHTML = display;
	document.getElementById('ghost').innerHTML = value1;
}
function allClear() {
	display = '';
	value1 = '';
	value2 = '';
	operation = '';
	refresh();
}
function operater(task) {
	operation = task;
	value1 = Number(display);
	display = '';
	refresh();
}
function equate() {
	if (operation == '+') {
		addition(value1, Number(display));
	} else if (operation == '-') {
		subtraction(value1, Number(display));
	} else if (operation == 'x') {
		multiplication(value1, Number(display));
	} else if (operation == '÷') {
		division(value1, Number(display));
	} else {
		document.getElementById('display').innerHTML = 'Select Operation';
		setTimeout(function() {
			refresh();
		}, 1000);
	}
}

function addition(value1, value2) {
	let answer = value1 + value2;
	allClear();
	document.getElementById('display').innerHTML = answer;
}

function subtraction(value1, value2) {
	let answer = value1 - value2;
	allClear();
	document.getElementById('display').innerHTML = answer;
}
function multiplication(value1, value2) {
	let answer = value1 * value2;
	allClear();
	document.getElementById('display').innerHTML = answer;
}
function division(value1, value2) {
	let answer = value1 / value2;
	allClear();
	document.getElementById('display').innerHTML = answer;
}
