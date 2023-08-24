if (document.querySelector('.collection-goods_parallax')) {
	window.addEventListener("scroll", cstmParallax);
	function cstmParallax() {
		let container = document.querySelector('.collection-goods_parallax');
		let item = document.querySelector('.collection-goods_parallax__image');
		let itemPosition = container.getBoundingClientRect().top + window.pageYOffset;
		let windowHeight = document.documentElement.clientHeight;
		if (window.innerWidth > 1) { //с какой толчишы паралакс отключается
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

/* проект berkano
HTML:
	<div class="swiper-slide collection-goods__slide collection-goods_parallax">
		<?php $isVideo = strpos($slide['src'], '.mp4') !== false;
		if (!$isVideo) : ?>
			<picture>
				<source data-srcset="<?= $srcSmall ?>" media="mobile" type="image/webp" />
				<source data-srcset="<?= $srcSmall ?>" media="mobile" />
				<source data-srcset="<?= $srcBig ?>" type="image/webp" />
				<img
					class="collection-goods__image lazy _preload collection-goods_parallax__image"
					data-sizes="auto" data-src="<?= $srcBig ?>"
					title="<?= $tagName ?? '' ?> <?= $h1 ?? $good['name'] ?>"
					alt="<?= $tagName ?? '' ?> <?= $h1 ?? $good['name'] ?> - фото <?= ($key) ?>"
				/>
			</picture>
		<?php else : ?>
			<video muted playsinline preload="metadata" class="hero__back-video lazy">
				<source src="/loaded/<?= $path ?>/<?= $slide['src'] ?>#t=0.01" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
			</video>
		<?php endif; ?>
	</div>
Css:
	.collection-goods_parallax{
	width: 100%;
	position: relative;
	overflow: hidden;
	}
	.collection-goods_parallax__image{
		width: 100%;
		//height: auto;
		left: 0px;
		top: 0px;
		position: absolute;
	}

-----------------------------------------------
Дополнительные паралкс эффекты есть у FLS "mouseparallax" и "howtodoit_07".
*/