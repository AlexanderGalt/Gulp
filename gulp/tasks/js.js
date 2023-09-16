import webpack from "webpack-stream"

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.Dev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({ // удобный вывод ошибки при сборки gulp. Работает с включёнными уведомлениями от windows. ПКМ на циферблат - Настройка значков уведомлений - Получать уведомления от приложений и других отправителей.
				title: "JS",
				message: "Error: <%= error.message %>"
			})
		))
		/* закоментил, т.к. для не большиз проектов он не нужен.
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'app.min.js',
			}
		}))
		*/
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}