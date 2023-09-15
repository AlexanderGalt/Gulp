// window.addEventListener('load', () => {
let itemServices = document.querySelectorAll('.item-our-services');
for (let i = 0; i < itemServices.length; i++) {
	let pathItems = itemServices[i].querySelector('.item-our-services__icon object').contentDocument.querySelectorAll('path');
	itemServices[i].addEventListener('mouseover', (e) => {
		for (let i1 = 0; i1 < pathItems.length; i1++) {
			pathItems[i1].style.fill = "#fff";
		}
	});

	itemServices[i].addEventListener('mouseout', (e) => {
		for (let i1 = 0; i1 < pathItems.length; i1++) {
			pathItems[i1].style.fill = "#079BBB";
		}
	});
}