//smooth-anchors
document.querySelectorAll('a[href^="#"').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		let href = this.getAttribute('href').substring(1);
		if(document.getElementById(href)){
			let scrollTarget = document.getElementById(href);
			let topOffset = 100; // space from above
			let elementPosition = scrollTarget.getBoundingClientRect().top;
			let offsetPosition = elementPosition - topOffset;
			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}else{
			console.log('no element #'+ href);
		}
	});
});