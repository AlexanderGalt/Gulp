		let YOffsetDefault = window.pageYOffset;
		let breadcrumbs;
			window.addEventListener('scroll',function() {
				if (document.querySelector('.breadcrumbs')){
					breadcrumbs = document.querySelector('.breadcrumbs');
					if(window.pageYOffset > 600){
						breadcrumbs.style.position = "fixed";
						if(YOffsetDefault < window.pageYOffset){
							breadcrumbs.style.top = "0px";
						}else{
							breadcrumbs.style.top = "90px";
						}
					}else{
						breadcrumbs.style.top = "600px";
						breadcrumbs.style.position = "absolute";
					}
				}
				
				if(YOffsetDefault < window.pageYOffset){
					document.querySelector('.top-bar').style.display = "none";
					
				}else{
					document.querySelector('.top-bar').style.display = "block";
				}
				YOffsetDefault = window.pageYOffset;

			});


		var scroll = function(element, style, positions, value) {
			// Превращаю значение цветов в массив
			if(style == 'backgroundColor' || style == 'background' || style == 'color'){
				var colorsVal = [], val;
				colorsVal[0] = value[0].split(',').map(Number),
				colorsVal[1] = value[1].split(',').map(Number);
				element.style[style] = 'rgb(' + colorsVal[0].join(',') + ')';
			}
			

			window.addEventListener('scroll',function() {
				var scrollTop = window.pageYOffset,
				// Высчитываю процент того, на сколько нужно изменить цвет
				pct = (window.pageYOffset - positions[0]) / positions[1];
				if(style == 'backgroundColor' || style == 'background' || style == 'color'){
					currentColor = [];
					// Проверяю, не выходит ли scroll за рамки
					if(window.pageYOffset <= positions[1] && window.pageYOffset >= positions[0]){
						for(let i = 0; i < colorsVal[0].length; i++) {
							// Проверяю, какое значение цвета больше
							if(colorsVal[0][i] < colorsVal[1][i]){
							// Высчитываю текущее значение цвета
								if(i != 3){
									val = ((colorsVal[1][i] - colorsVal[0][i]) * pct) + colorsVal[0][i];
									// Устанавливаю текущее значение цвета
									currentColor[i] = Math.round(val);
								}else{
									val = 1*pct;
									currentColor[i] = val;
								}
							}else{
								// Высчитываю текущее значение цвета
								val = colorsVal[0][i] - ((colorsVal[0][i] - colorsVal[1][i]) * pct);
								// Устанавливаю текущее значение цвета
								currentColor[i] = Math.round(val);
							};
						};
						// Применяю цвет фона к элементу
						element.style[style] = 'rgb(' + currentColor.join(',') + ')';
					}else{
						element.style[style] = '#E5E5E5';
					};
				} else if(style == 'height'){
					let currenValue;
					if(window.pageYOffset <= positions[1] && window.pageYOffset >= positions[0]){
						currenValue = value[0] -((value[0] - value[1]) * pct);
						currenValue = Math.round(currenValue);
						element.style[style] = currenValue + 'px';
					} else {
						element.style[style] = value[1] + 'px';
					}
				}

			});

		};

		(function() {
			let topBar = document.querySelector("header");
			scroll(topBar, 'backgroundColor', [0, 1000], ['229, 229, 229, 0', '229, 229, 229, 1']);
			scroll(topBar, 'height', [0, 1000], [142, 60]);
			let headerBtn = document.querySelector('.header-row__btn');
			scroll(headerBtn, 'height', [0, 1000], [52, 41]);
		})();
	