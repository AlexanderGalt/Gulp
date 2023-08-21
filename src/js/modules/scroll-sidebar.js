"use strict";

window.addEventListener('load', function () {
	
	if (document.querySelector('.sidebar__list')) {
		if (window.innerWidth > 1375) {
			//СЃРєСЂРѕР» СЃР°Р№РґР±Р°СЂР°
			var loftSidebar = document.querySelector(".sidebar__list");
			let startPoint = document.querySelector(".main").getBoundingClientRect().top + window.pageYOffset - 110;
			function scroll_sidebar() {
				let endPoint;
				if (document.querySelector("section.form-consultation")) {
					endPoint = document.querySelector(".form-consultation").getBoundingClientRect().top + window.pageYOffset - 100;
				} else {
					endPoint = document.querySelector("footer").getBoundingClientRect().top + window.pageYOffset - 100;
				}
				let blockHeight = loftSidebar.clientHeight;

				if (endPoint - blockHeight - startPoint - 110 > 1) {
					if (window.pageYOffset >= startPoint) {
						loftSidebar.style.position = "fixed";
						loftSidebar.style.top = 110 + "px";
					} else {
						loftSidebar.style.position = "static";
					}
					if (window.pageYOffset >= endPoint - blockHeight - 110) {
						loftSidebar.style.position = "absolute";
						loftSidebar.style.top = endPoint - blockHeight - startPoint - 110 + "px";
					}
				}
			}
			window.addEventListener('scroll', scroll_sidebar);
			scroll_sidebar();
		}
	}

})