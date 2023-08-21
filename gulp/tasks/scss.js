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
			app.plugins.notify.onError({
				title: "SCSS",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass({
			outputStyle: 'expanded' //'compressed', 'expanded'
		}))
		.pipe(app.plugins.if(
			app.isBuild,
			groupCssMediaQueries()
		)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss(// чтобы в css добавлялись правила для .webp изображений (bg), в зависимости от класса у тега html, которые добавляются отдельной js функцией.
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
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: true
				})
			)
		)
		//.pipe(app.gulp.dest(app.path.build.css))  раскоментировать если нужен не сжатый дубль файла стилей
		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss()// сжатие файла css
			)
		)
		/*
		.pipe(rename({
			extname: ".min.css"
		}))
		*/
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
}