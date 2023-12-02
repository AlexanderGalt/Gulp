// map. Для указания долготы и широты координат воспользуйтесь сервисом от яндекс — https://yandex.ru/map-constructor/location-tool/. В поле «центр», справа внизу, будут отображены координаты точки.
const mapBtns = document.querySelectorAll('.js-map-window-btn'),
	mapWindow = document.querySelector('.map-window');

const map_init = function () {
	// const placemarks = JSON.parse(mapWindow.dataset.coordinates);
	const map = new ymaps.Map('map', {
		center: [52.505259116942035, 13.39898325927732], // [placemarks[0], placemarks[1]]
		zoom: 10,
		controls: ['zoomControl'],
		//behaviors: ['drag']
	});
	const geoObject = new ymaps.Placemark([placemarks[0], placemarks[1]],
		{
			balloonContent: 'Автозаводская ул., 23А, корп. 2 офис 304',
		},
		{
			//iconLayout: 'default#image',
			//iconImageHref: '/wp-content/uploads/2022/08/Group-3709.svg',
			//iconImageSize: iconImageSize,
			//iconImageOffset: iconImageOffset,
			//balloonOffset: [20, -32],
			//hideIconOnBalloonOpen: false,
		});
	map.geoObjects.add(geoObject);
}

for (let i = 0; i < mapBtns.length; i++) { // open map window
	mapBtns[i].addEventListener('click', (e) => {
		if (window.innerWidth < 768) {
			document.body.classList.add('js-popup-on');
			document.body.classList.add('js-map-window-on');
		}
		if (!(document.querySelector('#js-api-yandex-map'))) {
			const incSriptMapAPI = document.createElement('script');
			incSriptMapAPI.src = '/js/api-yandex-map.min_en.js';
			incSriptMapAPI.setAttribute('defer', '');
			incSriptMapAPI.setAttribute('id', 'js-api-yandex-map');
			document.body.append(incSriptMapAPI);
			incSriptMapAPI.onload = () => {
				ymaps.ready(map_init);
			}
		}
	});
}