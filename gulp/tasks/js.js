import webpack from "webpack-stream"

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.Dev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({ // удобный вывод ошибки при сборки gulp. Работает с включёнными уведомлениями от windows. ПКМ на циферблат - Настройка значков уведомлений - Получать уведомления от приложений и других отправителей.
				title: "JS",
				message: "Error: <%= error.message %>"
			})
		))
		/*
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			//devtool: "inline-source-map",
			entry: {
				home: {
					import: ['./src/js/bundle.js', './src/js/home.js'],
				},
				//new_page: {
				//	import: ['./src/js/bundle.js', './src/js/new-page.js'],
				//	filename: 'new-page.js',
				//}
			},
			//optimization: {
			//	splitChunks: {
			//		chunks: 'all', // находит общие зависимости в точках входа и выносит их в отдельный файл, чтобы избежать дублировонного подключения пакетов. Бессмыслено для bundle.js, т.к. его мы сами выносим в отдельную точку входа.
			//	},
			//},
			//Info:https://webpack.js.org/concepts/#entry
		}))
		*/
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}