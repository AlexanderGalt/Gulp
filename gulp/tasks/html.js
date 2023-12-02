import fileinclude from "gulp-file-include"; // чтобыработало подключение файлов: @@include('html/header.html',{})
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // оборачивание img в picture и добавление source webp
import versionNumber from "gulp-version-number";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({ // удобный вывод ошибки при сборки gulp. Работает с включёнными уведомлениями от windows. ПКМ на циферблат - Настройка значков уведомлений - Получать уведомления от приложений и других отправителей.
				title: "HTML",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(fileinclude()) // сборка файлов html (header, footer)
		.pipe(app.plugins.replace(/@img\//g, 'img/')) // обработка путей '@img' (1/2)
		.pipe( // add pictur в HTML
			//app.plugins.if( app.isBuild,
			webpHtmlNosvg()
			//)
		)

		/* добавление версий к файлам js и css в режиме build, чтобы видеть не кэшированный результат в браузере. Закоментил, т.к. это нужно только для работы верстальчщика, чтобы заказчик видел новые внесённые правки. Аналог shift+f5.
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					'value': '%DT%',
					'append': {
						'key': '_v',
						'cover': 0,
						'to': [
							'css',
							'js',
						]
					},
					'output': {
						'file': 'gulp/version.json'
					}
				})
			)
		)
		*/
		.pipe(app.gulp.dest(app.path.build.html)) // выгружаем обработанные html файлы dist
		.pipe(app.plugins.browsersync.stream()) // обновление страницы локального сервера.
}