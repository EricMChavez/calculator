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
	clearActive();
	refresh();
}
function operater(task, selected) {
	if (value1 != '') {
		operation = task;
		clearActive();
		selected.setAttribute('id', 'active');
	} else if (display != '') {
		value1 = Number(display);
		operation = task;
		display = '';
		refresh();
		clearActive();
		selected.setAttribute('id', 'active');
	}
}

function equate() {
	if (operation == '+' && display != '') {
		addition(value1, Number(display));
	} else if (operation == '-' && display != '') {
		subtraction(value1, Number(display));
	} else if (operation == 'x' && display != '') {
		multiplication(value1, Number(display));
	} else if (operation == '÷' && display != '') {
		division(value1, Number(display));
	} else if (operation == '' && display != '') {
		document.getElementById('display').innerHTML = 'Select Operation';
		setTimeout(function() {
			refresh();
		}, 1000);
	}
}

function addition(value1, value2) {
	let answer = value1 + value2;
	allClear();
	display = answer;
	document.getElementById('display').innerHTML = answer;
}

function subtraction(value1, value2) {
	let answer = value1 - value2;
	allClear();
	display = answer;
	document.getElementById('display').innerHTML = answer;
}
function multiplication(value1, value2) {
	let answer = value1 * value2;
	allClear();
	display = answer;
	document.getElementById('display').innerHTML = answer;
}
function division(value1, value2) {
	let answer = value1 / value2;
	allClear();
	display = answer;
	document.getElementById('display').innerHTML = answer;
}
function clearActive() {
	if (document.getElementById('active')) {
		let old = document.getElementById('active');
		old.removeAttribute('id');
	}
}
function easterEgg() {
	document.getElementById('display').innerHTML = '© Eric Chavez 2019';
	setTimeout(function() {
		refresh();
	}, 1000);
}
document.onkeypress = function(e) {
	if (e.keyCode >= 48 && e.keyCode <= 57) {
		//numbers
		input(e.keyCode - 48);
	} else if (e.keyCode === 13) {
		e.preventDefault();
		equate();
	} else if (e.keyCode == 61) {
		document.getElementById('addition').click();
	} else if (e.keyCode == 45) {
		document.getElementById('subtraction').click();
	} else if (e.keyCode == 120) {
		document.getElementById('multiplication').click();
	} else if (e.keyCode == 47) {
		document.getElementById('division').click();
	}
};
