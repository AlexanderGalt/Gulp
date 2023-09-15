

//form
let contactsForms = document.querySelectorAll('form[role="form"]');
for (let i = 0; i < contactsForms.length; i++) {
	contactsForms[i].addEventListener('submit', formSend);
}
async function formSend(e) {
	e.preventDefault();
	let form = e.target;
	let error = formValidate(form);
	let formData = new FormData(form);

	if (error === 0) {
		form.classList.add('_sending');
		let response = await fetch(form.getAttribute('action'), {
			method: form.getAttribute('method'),
			body: formData
		});
		if (response.ok) {
			let result = await response.text();
			console.log(result);
			form.reset();
			form.classList.remove('_sending');
			document.body.classList.remove('js-order-call-window-open');
			document.body.classList.add('js-thnx-window-open');
			document.body.classList.add('js-popup-on');
		} else {
			form.classList.remove('_sending');
		}
	}
}

function formValidate(form) {
	let error = 0;
	let formReq = form.querySelectorAll('._req')
	for (let i = 0; i < formReq.length; i++) {
		let input = formReq[i];
		input.parentElement.classList.remove('_error');
		if (input.getAttribute("type") === "email") {
			if (emailTest(input)) {
				input.parentElement.classList.add('_error');
				error++;
			}
		} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
			input.parentElement.classList.add('_error');
			error++;
		} else {
			if (input.value === '') {
				input.parentElement.classList.add('_error');
				error++;
			}
		}
	};
	return error;
}

//Функция теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//notice check
let noticeCheck = document.querySelectorAll('.check');
if (noticeCheck.length) {
	for (let i = 0; i < noticeCheck.length; i++) {
		noticeCheck[i].addEventListener('click', (e) => {
			noticeCheck[i].classList.toggle('active');
			noticeCheck[i].closest('.form__notice').querySelector('input').click();
		});
	}
}

//phonemask js
var phoneInputs = document.querySelectorAll('input[name="your-tel"]');

var getInputNumbersValue = function (input) {
	// Return stripped input value вЂ” just numbers
	return input.value.replace(/\D/g, '');
}

var onPhonePaste = function (e) {
	var input = e.target,
		inputNumbersValue = getInputNumbersValue(input);
	var pasted = e.clipboardData || window.clipboardData;
	if (pasted) {
		var pastedText = pasted.getData('Text');
		if (/\D/g.test(pastedText)) {
			// Attempt to paste non-numeric symbol вЂ” remove all non-numeric symbols,
			// formatting will be in onPhoneInput handler
			input.value = inputNumbersValue;
			return;
		}
	}
}

var onPhoneInput = function (e) {
	var input = e.target,
		inputNumbersValue = getInputNumbersValue(input),
		selectionStart = input.selectionStart,
		formattedInputValue = "";

	if (!inputNumbersValue) {
		return input.value = "";
	}

	if (input.value.length != selectionStart) {
		// Editing in the middle of input, not last symbol
		if (e.data && /\D/g.test(e.data)) {
			// Attempt to input non-numeric symbol
			input.value = inputNumbersValue;
		}
		return;
	}

	if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
		if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
		var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
		formattedInputValue = input.value = firstSymbols + " ";
		if (inputNumbersValue.length > 1) {
			formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
		}
		if (inputNumbersValue.length >= 5) {
			formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
		}
		if (inputNumbersValue.length >= 8) {
			formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
		}
		if (inputNumbersValue.length >= 10) {
			formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
		}
	} else {
		formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
	}
	input.value = formattedInputValue;
}
var onPhoneKeyDown = function (e) {
	// Clear input after remove last symbol
	var inputValue = e.target.value.replace(/\D/g, '');
	if (e.keyCode == 8 && inputValue.length == 1) {
		e.target.value = "";
	}
}
for (var phoneInput of phoneInputs) {
	phoneInput.addEventListener('keydown', onPhoneKeyDown);
	phoneInput.addEventListener('input', onPhoneInput, false);
	phoneInput.addEventListener('paste', onPhonePaste, false);
}