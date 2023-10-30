import webp from "gulp-webp"; // 
import imagemin from "gulp-imagemin";

export const images = () => {
	return app.gulp.src(app.path.src.images) // получаем все исходные изображения
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({ // удобный вывод ошибки при сборки gulp. Работает с включёнными уведомлениями от windows. ПКМ на циферблат - Настройка значков уведомлений - Получать уведомления от приложений и других отправителей.
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.path.build.images)) // выделяем для работы только новые исходные картинки, которых ещё нет в dist, а не все заново.
		.pipe(
			app.plugins.if(
				app.isBuild,
				imagemin({ //сжимаем картинки
					progressive: true,
					svogoPlugins: [{ removeViewRox: false }],
					interlaced: true,
					optimizationLevel: 3 // 0 to 7
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.images)) // выгружаем сжаты картинки в dist
		/* закоментил, т.к. изначально было так что сходники для конвертации в webp брались не из зжатых картинок а из исходных. Я сделал так чтобы в webp ковертировались уже сжатые изображения а не исходные
		.pipe(app.plugins.if(app.isBuild,app.gulp.src(app.path.src.images))) // получаем все исходные изображения
		.pipe(app.plugins.if(app.isBuild,app.plugins.newer(app.path.build.images))) // выделяем для работы только новые исходные картинки, которых ещё нет в dist, а не все заново.
		*/
		/* автоматическую конвертациую в webp и добавлние picture в html
		.pipe(
			app.plugins.if(
				app.isBuild,
				webp() // создаём webp формат картинки
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.gulp.dest(app.path.build.images) // выгружаем картинки webp в dist
			)
		)
		*/
		.pipe(app.gulp.src(app.path.src.svg)) // берём исходные svg
		.pipe(app.gulp.dest(app.path.build.images)) // выгружаем svg картинки webp в dist
		.pipe(app.plugins.browsersync.stream()); // обновляем страницу локального сервера.
}