//tabs
let productTabsHeader = document.querySelectorAll('.product-tabs__header');
function clearActive() {
	let active = document.querySelectorAll('.js-active');
	for (let i = 0; i < active.length; i++) {
		active[i].classList.remove('js-active');
	}
}
for (let i = 0; i < productTabsHeader.length; i++) {
	productTabsHeader[i].addEventListener('click', (e) => {
		clearActive();
		productTabsHeader[i].classList.add('js-active');
		productTabsHeader[i].closest('.product-tabs').querySelector('.product-tabs__content:nth-child(' + (i + 1) + ')').classList.add('js-active');
	});
}