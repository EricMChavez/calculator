let display = '';
let value1 = '';
let operation = '';
function input(btn) {
	display = display.concat(btn);
	refresh();
}
function refresh() {
	document.getElementById('display').innerHTML = display;
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
	value1 = display;
	display = '';
	refresh();
}
function equate() {
	if (operation == '+') {
		addition();
	} else if (operation == '-') {
		subtraction();
	} else if (operation == 'x') {
		multiplication();
	} else if (operation == '÷') {
		division();
	} else {
		document.getElementById('display').innerHTML = 'Select Operation';
		setTimeout(function() {
			refresh();
		}, 1000);
	}
}

function addition() {}
function subtraction() {}
function multiplication() {}
function division() {}
