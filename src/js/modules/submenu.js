// мобильное под меню
let lis = document.querySelectorAll('.menu-mobile .menu-item-has-children');
for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', (e) => {
		if (e.target != lis[i].querySelector('a') && e.target == lis[i]) {
			if (!e.target.classList.contains('_active')) {
				lis[i].closest('ul').classList.add('next-tab');
				if (lis[i].closest('.menu-item-has-children._active')) {
					lis[i].closest('.menu-item-has-children._active').classList.add('_old-active');
					lis[i].closest('.menu-item-has-children._active').classList.remove('_active');
				}
				lis[i].closest('li.menu-item-has-children').classList.add('_active');
			} else {
				if (lis[i].closest('.menu-item-has-children._old-active')) {
					lis[i].closest('.menu-item-has-children._old-active').classList.add('_active');
					lis[i].closest('.menu-item-has-children._old-active').classList.remove('_old-active');
				}
				lis[i].closest('ul').classList.remove('next-tab');
				lis[i].classList.remove('_active');
			}
		}
	});
}