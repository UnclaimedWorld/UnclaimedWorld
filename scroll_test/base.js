function base () {
	'use strict';
	var counter = 0;
	const result = document.createElement("textarea");
	result.classList.add('result');
	result.rows = '20';
	result.cols = '60';
	let appended = false;
	function counterUp() {
		counter++;
	}
	return function(str) {
		if(!appended) {
			document.body.append(result);
			appended = true;
		}
		result.innerHTML += counter + '>>> ' + str + '\n';
		counter++;
	}
}
window.$ = base();