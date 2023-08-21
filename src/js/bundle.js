"use strict"
//проверка браузера на поддержку формата Webp
function isWebp() {
	//проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

document.addEventListener('DOMContentLoaded', () => {

	// отслеживание трансфорсации шапки
	function headerScroll() {
		if (window.pageYOffset > 1) {
			header.classList.add('_fixed');
		} else {
			header.classList.remove('_fixed');
		}
	}

	// btns call popups
	let btnPopup = document.querySelectorAll('.js-btn-popup');
	for (let i = 0; i < btnPopup.length; i++) {
		btnPopup[i].addEventListener('click', (e) => {
			document.body.classList.add('js_popup-on');
		});
	}

	// open js-btn-registration
	let orderCallBtns = document.querySelectorAll('.js-btn-registration');
	for (let i = 0; i < orderCallBtns.length; i++) {
		orderCallBtns[i].addEventListener('click', (e) => {
			document.body.classList.add('js_registration-window-open');
		});
	}

	// close popup
	document.addEventListener("mousedown", (e) => {
		if (e.target.classList.contains('js_popup-on') || e.target.classList.contains('popup-window__close')) {
			document.body.classList.remove("js_popup-on");
			document.body.classList.remove("js_registration-window-open");
		}
	});

});
document.addEventListener('DOMContentLoaded', () => {
	isWebp();
});