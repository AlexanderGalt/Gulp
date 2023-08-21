if (document.querySelector('.collection-goods_parallax')) {
	window.addEventListener("scroll", cstmParallax);
	function cstmParallax() {
		let container = document.querySelector('.collection-goods_parallax');
		let item = document.querySelector('.collection-goods_parallax__image');
		let itemPosition = container.getBoundingClientRect().top + window.pageYOffset;
		let windowHeight = document.documentElement.clientHeight;
		if (window.innerWidth > 1) {
			if ((window.pageYOffset + windowHeight + 0 > itemPosition)) {
				let cof = (item.clientHeight - container.clientHeight) / (windowHeight + container.clientHeight);
				let def = (window.pageYOffset + windowHeight - itemPosition) * cof;
				item.style.cssText = 'transform: translate(0px,-' + def + 'px)';
			}
		} else {
			item.style.cssText = 'transform: translate(0px,0px)';
		}
	}
}