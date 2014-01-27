var passcodeValue = '';

function ButtonSet(e) {
	var theView = e.source;
	theView.backgroundColor = "#a8a8a8";
}

function ButtonUnSet(e) {
	ButtonUnSetView(e.source);
}

function ButtonUnSetView(theView) {
	theView.backgroundColor = '#F3F4F4';
}

function keyPressed(e) {
	var theView = e.source;
	var id = theView.id;
	ButtonUnSetView(theView);
	var id = e.source.id,
		value = e.source.value;
	if(value == 'c') {
		if(passcodeValue != null && passcodeValue != "") {
			Ti.API.info('Value is ----: ' + passcodeValue);
			Ti.API.info('lengthhhh is ----: ' + passcodeValue.length);
			Ti.API.info('Value is ++++: ' + passcodeValue.toString().slice(0, 2));
			passcodeValue = passcodeValue.toString().slice(0, passcodeValue.length - 1);
			Ti.App.fireEvent("clearValue", {
				len: passcodeValue.length
			});
		}
	} else {
		Ti.API.info('value ----: ' + value);
		passcodeValue += value;
		Ti.API.info('passcodeValue ----: ' + passcodeValue);
		Ti.API.info('Passcode ----: ' + passcodeValue);
		Ti.App.fireEvent("setPasswordMask", {
			value: passcodeValue
		});
	}
}

Ti.App.addEventListener("setTextFieldNull", function(e) {
	passcodeValue = '';
});