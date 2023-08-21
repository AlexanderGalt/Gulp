"use strict"
document.addEventListener('DOMContentLoaded', () => {
	// our-services
	let itemServices = document.querySelectorAll('.item-our-services');
	for (let i = 0; i < itemServices.length; i++) {
		itemServices[i].addEventListener('mouseover', (e) => {
			itemServices[i].querySelector('.item-our-services__icon object').contentDocument.querySelector('path').style.fill = "#fff";
		});
		itemServices[i].addEventListener('mouseout', (e) => {
			itemServices[i].querySelector('.item-our-services__icon object').contentDocument.querySelector('path').style.fill = "#079BBB";
		});
	}

	//обёртка лайдеров
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

	//reviews
	let reviewItems = document.querySelectorAll('.slide-reviews');
	for (let i = 0; i < reviewItems.length; i++) {
		reviewItems[i].addEventListener('click', (e) => {
			if (!e.target.classList.contains('header-slide-reviews__clinic_link')) {
				document.querySelector('.review-window .popup-window__container').innerHTML = '';
				document.body.classList.add('_popup-on');
				document.body.classList.add('_review-window_open');
				document.querySelector('.review-window .popup-window__container').append(reviewItems[i].querySelector('.slide-reviews__header').cloneNode(true));
				if (reviewItems[i].querySelector('.slide-reviews__text_full')) {
					document.querySelector('.review-window .popup-window__container').append(reviewItems[i].querySelector('.slide-reviews__text_full').cloneNode(true));
				} else {
					document.querySelector('.review-window .popup-window__container').append(reviewItems[i].querySelector('.slide-reviews__text').cloneNode(true));
				}
				document.querySelector('.review-window .popup-window__container').append(reviewItems[i].querySelector('.slide-reviews__date').cloneNode(true));
			}
		});
	}

	// FAQ
	// Spoilers
	let _slideHide = (target, duration = 500) => {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
	let _slideShow = (target, duration = 500) => {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
	let _slideToggle = (target, duration = 500) => {
		if (target.hidden) {
			return _slideShow(target, duration);
		} else {
			return _slideHide(target, duration);
		}
	}

	// FAQ script
	let faqItems = document.querySelectorAll('.faq-item');
	function faqItems_close(target) {
		for (let i = 0; i < faqItems.length; i++) {
			if (faqItems[i] != target) {
				_slideHide(faqItems[i].querySelector('.faq-item__text'), 300);
				faqItems[i].classList.remove('_active');
			}
		}
	}
	for (let i = 0; i < faqItems.length; i++) {
		faqItems[i].addEventListener('click', (e) => {
			if (!document.querySelectorAll('.faq-item ._slide').length) {
				faqItems_close(faqItems[i]);
				let et = e.target.closest('.faq-item');
				et.classList.toggle('_active');
				_slideToggle(e.target.closest('.faq-item').querySelector('.faq-item__text'), 300);
			}
		});
	}
});