//lazy-load
function lazyloadlInit() {
	let windowHeight = document.documentElement.clientHeight;
	lazyScrollCheck();
	window.addEventListener("scroll", lazyScrollCheck);

	function lazyScrollCheck() {
		if (document.querySelector('.lazy-img img[data-src]')) {
			let lazyImage = document.querySelector('.lazy-img img[data-src]');
			let lazyImagesPosition = lazyImage.getBoundingClientRect().top + window.pageYOffset;
			lazyImage.onload = () => lazyScrollCheck();
			if (window.pageYOffset + windowHeight + 0 > lazyImagesPosition) {
				lazyInsert(lazyImage.closest('.lazy-img '));
				lazyImage.closest('.lazy-img ').classList.remove('lazy-img');
				lazyScrollCheck();
				ibg();
			}
		}
	}

	function lazyInsert(lazyItem) {
		let sources = lazyItem.querySelectorAll('source');
		for (let i = 0; i < sources.length; i++) {
			if (sources[i].getAttribute('data-srcset')) {
				sources[i].setAttribute('srcset', sources[i].getAttribute('data-srcset'));
				sources[i].removeAttribute('data-srcset');
			}
		}
		if (lazyItem.querySelector('img[data-src]')) {
			let img = lazyItem.querySelector('img');
			img.setAttribute('src', img.getAttribute('data-src'));
			img.removeAttribute('data-src');
		}
	}
}

//ibg
/*
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			if (document.documentElement.classList.contains('webp')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
			} else {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
*/

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector("img").currentSrc + ')';
		}
	}
}