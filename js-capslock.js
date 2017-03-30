// Javascript Document
window.onload = function() {
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].type.toLowerCase() === "password") {
			inputs[i].addEventListener('keypress', function(e) {
				capsLock(e, this.nextElementSibling);
			}, false);
		}
	}
}


function capsLock(e, tooltip) {
	var kc = e.keyCode ? e.keyCode : e.which;
	var sk = e.shiftKey ? e.shiftKey : ((kc == 16) ? true : false);
	
	if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk)) {
		tooltip.style.visibility = 'visible';
	} else {
		tooltip.style.visibility = 'hidden';
	}
}