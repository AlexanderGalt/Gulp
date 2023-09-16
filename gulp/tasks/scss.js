import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // сжатие css файла
import webpcss from 'gulp-webpcss'; // вывод webp изображений
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({ // удобный вывод ошибки при сборки gulp. Работает с включёнными уведомлениями от windows. ПКМ на циферблат - Настройка значков уведомлений - Получать уведомления от приложений и других отправителей.
				title: "SCSS",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.replace(/@img\//g, '../img/')) // обработка путей '@img' (1/2)
		.pipe(sass({
			outputStyle: 'expanded' // 'expanded', 'compressed'. На сколько бкдет сжат скомпелированный css. Устанавливаем режим без сжатия , т.к. сжатие мы делаем другим способом ???. Info: https://sass-scss.ru/documentation/stili_vihodnogo_faila/szhatii_stil_compressed/ 
		}))
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupCssMediaQueries() // группировка медиа запросов
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss(// добавление в css правил по отображению webp (bg), если тег html содержит соответствующий класс, который добавляются отдельной js функцией в bundle.js.
					{
						webpClass: ".webp",
						noWebpClass: ".no-webp"
					}
				)
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({ // добавление префиксов для кроссбраузерности.
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: true
				})
			)
		)
		//.pipe(app.gulp.dest(app.path.build.css)) // создание не сжатого удбликата файлов css. Закоментил, т.к. это не нужно в принципе и я закоментил последующие сжатие css

		//.pipe(app.plugins.if(app.isBuild, cleanCss())) // сжатие файла css

		//.pipe(rename({extname: ".min.css"})) //Переименование файлов закоментил, т.к. оно не нужно, ведь я закоментил автоматическое зжатие css.

		.pipe(app.gulp.dest(app.path.build.css)) // выгружаем обработанные html файлы dist
		.pipe(app.plugins.browsersync.stream()); // обновление страницы локального сервера.
}