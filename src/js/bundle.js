"use strict"
// import { isWebp } from "modules/isWebp.js";

document.addEventListener('DOMContentLoaded', () => {

	// отслеживание трансфорсации шапки
	function headerScroll() {
		if (window.pageYOffset > 1) {
			header.classList.add('_fixed');
		} else {
			header.classList.remove('_fixed');
		}
	}

	// btns popup
	let btnPopup = document.querySelectorAll('.js-btn-popup');
	for (let i = 0; i < btnPopup.length; i++) {
		btnPopup[i].addEventListener('click', (e) => {
			document.body.classList.add('js-popup-on');
		});
	}

	// open order-call-window
	let orderCallBtns = document.querySelectorAll('.js-order-call-window-btn');
	for (let i = 0; i < orderCallBtns.length; i++) {
		orderCallBtns[i].addEventListener('click', (e) => {
			document.body.classList.add('js-order-call-window-open');
		});
	}

	// close popup
	document.addEventListener("mousedown", (e) => {
		if (e.target.classList.contains('js-popup-on') || e.target.classList.contains('popup-window__close')) {
			document.body.classList.remove("js-popup-on");
			document.body.classList.remove("js-order-call-window-open");
			document.body.classList.remove("js-thnx-window-open");// другие попапы
		}
	});

	//form send
	//modules\form.js

	//проверка браузера на поддержку формата Webp и добавление соответствующего класс в тег <html>. Это нужно для отображения фоновых картинок из css. gulp\tasks\scss.js 33
	function isWebp() {
		//проверка поддержки webp
		function testWebP(callback) {
			let webP = new Image();
			webP.onload = webP.onerror = function () {
				callback(webP.height == 2);
			};
			webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
		}
		// добавление класса webp или no-webp для HTML
		testWebP(function (support) {
			let className = support === true ? 'webp' : 'no-webp';
			document.documentElement.classList.add(className);
		});
	}
	isWebp();
});