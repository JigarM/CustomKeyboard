
$.container.open();

var timer;

Ti.App.addEventListener("setPasswordMask", function(e) {
	var value = e.value;
	Ti.API.info('value is : ' + e.value);
	Ti.API.info('Length :  ' + value.toString().length);
	var len = value.length;
	setBoxValue(len, e.value);
});

function clear() {
	$.box1.text = '';
	$.box2.text = '';
	$.box3.text = '';
	$.box4.text = '';
	Ti.App.fireEvent("setTextFieldNull");
}

function checkPayment() {
	Ti.API.info('Called checkPayment | Passcode ' + APP.timer);
	UTIL.paymentList();
}

function submit(passcode) {
	$.box1.text = '';
	$.box2.text = '';
	$.box3.text = '';
	$.box4.text = '';
	Ti.App.fireEvent("setTextFieldNull");
	alert('Value: '+passcode);
}

Ti.App.addEventListener("clearValue", function(e) {
	setBoxValue(e.len);
});

function setBoxValue(len, value) {
	switch(len) {
		case 0:
			$.box1.text = '';
			break;
		case 1:
			$.box1.text = '\u2022';
			$.box2.text = '';
			break;
		case 2:
			$.box1.text = '\u2022';
			$.box2.text = '\u2022';
			$.box3.text = '';
			break;
		case 3:
			$.box1.text = '\u2022';
			$.box2.text = '\u2022';
			$.box3.text = '\u2022';
			$.box4.text = '';
			break;
		case 4:
			$.box1.text = '\u2022';
			$.box2.text = '\u2022';
			$.box3.text = '\u2022';
			$.box4.text = '\u2022';
			setTimeout(function() {
				submit(value);
			}, 300);

			return;
	}
}