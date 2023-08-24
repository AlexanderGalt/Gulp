//map_Init
function map_init() {
	let placemarks = JSON.parse(document.querySelector('#block-map__item').getAttribute('data-ttr'));

	let map = new ymaps.Map('block-map__item', {
		center: [placemarks[0].latitude, placemarks[0].longitude],//[52.505259116942035, 13.39898325927732],
		zoom: 10,
		controls: ['zoomControl'],
		//behaviors: ['drag']
	});

	let geoObjects = [];

	let iconImageSize = [40, 40];
	let iconImageOffset = [-20, -20];

	for (let i = 0; i < placemarks.length; i++) {
		geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
			{
				balloonContent: placemarks[i].balloonContent.join(''),
			},
			{
				iconLayout: 'default#image',
				iconImageHref: '/wp-content/uploads/2022/08/Group-3709.svg',
				iconImageSize: iconImageSize,
				iconImageOffset: iconImageOffset,
				balloonOffset: [20, -32],
				hideIconOnBalloonOpen: false,
			});
		map.geoObjects.add(geoObjects[i]);
	}
}