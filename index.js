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
}
function allClear() {
	display = '';
	value1 = '';
	value2 = '';
	operation = '';
	refresh();
}
