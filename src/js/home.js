"use strict"
document.addEventListener('DOMContentLoaded', () => {
	//обёртка лайдеров
	/*
	let sliders = document.querySelectorAll('._swiper');
	if (sliders) {
		for (let index = 0; index < sliders.length; index++) {
			let slider = sliders[index];
			if (!slider.classList.contains('swiper-bild')) {
				let slider_items = slider.children;
				if (slider_items) {
					for (let index = 0; index < slider_items.length; index++) {
						let el = slider_items[index];
						el.classList.add('swiper-slide');
					}
				}
				let slider_content = slider.innerHTML;
				let slider_wrapper = document.createElement('div');
				slider_wrapper.classList.add('swiper-wrapper');
				slider_wrapper.innerHTML = slider_content;
				slider.innerHTML = '';
				slider.appendChild(slider_wrapper);
				slider.classList.add('swiper-bild');
			}
		}
	}
	let slider_directions = new Swiper('.directions__slider', {
		observer: true,
		observeParents: true,
		slidesPerView: 3.1,
		spaceBetween: 20,
		autoHeight: true,
		pagination: {
			el: '.directions__control .slider-control_dots',
			clickable: true,
		},
		navigation: {
			nextEl: '.directions__control .slider-control_next',
			prevEl: '.directions__control .slider-control_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
				autoHeight: true
			},
			770: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1300: {
				slidesPerView: 4.1
			},
		},
	});
	let slider_reviews = new Swiper('.reviews__slider', {
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 20,
		autoHeight: true,
		speed: 800,
		pagination: {
			el: '.reviews__control .slider-control_dots',
			clickable: true,
		},
		navigation: {
			nextEl: '.reviews__control .slider-control_next',
			prevEl: '.reviews__control .slider-control_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
				autoHeight: true
			},
			770: {
				slidesPerView: 2
			},
			1150: {
				slidesPerView: 3
			}
		},
	});
	*/
});