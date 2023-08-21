//FAQ
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

//script
let faqItems = document.querySelectorAll('.item-faq');
function faqItems_close(target) {
	for (let i = 0; i < faqItems.length; i++) {
		if (faqItems[i] != target) {
			_slideHide(faqItems[i].querySelector('.spoiler-item__text'), 300);
			faqItems[i].classList.remove('js-active');
		}
	}
}
for (let i = 0; i < faqItems.length; i++) {
	faqItems[i].addEventListener('click', (e) => {
		if (!document.querySelectorAll('.spoiler-item ._slide').length) {
			faqItems_close(faqItems[i]);
			let et = e.target.closest('.spoiler-item');
			et.classList.toggle('js-active');
			_slideToggle(e.target.closest('.spoiler-item').querySelector('.spoiler-item__text'), 300);
		}
	});
}

//v2
/*
	let faqItems = document.querySelectorAll('.faq-item');
	for (let i = 0; i < faqItems.length; i++) {
		faqItems[i].addEventListener('click', (e) => {
			if (document.querySelector('.faq-item._active')) {
				let faqItem_active = document.querySelector('.faq-item._active');
				_slideHide(document.querySelector('.faq-item._active .faq-item__text'), 300);
				document.querySelector('.faq-item._active').classList.remove('_active');
				if (e.target.closest('.faq-item') != faqItem_active) {
					_slideToggle(e.target.closest('.faq-item').querySelector('.faq-item__text'), 300);
					e.target.closest('.faq-item').classList.toggle('_active');
				}
			} else {
				_slideShow(e.target.closest('.faq-item').querySelector('.faq-item__text'), 300);
				e.target.closest('.faq-item').classList.add('_active');
			}
		});
	}
*/

//many
/*
let faqItemsProgram = document.querySelectorAll('.item-program');
for (let i = 0; i < faqItemsProgram.length; i++) {
	faqItemsProgram[i].addEventListener('click', (e) => {
		if (!document.querySelectorAll('.spoiler-item ._slide').length) {
			e.target.closest('.spoiler-item').classList.toggle('js-active');
			_slideToggle(e.target.closest('.spoiler-item').querySelector('.spoiler-item__text'), 300);
		}
	});
}
*/