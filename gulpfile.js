// Основные модули
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаём значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js"; // копирует files в dist
import { reset } from "./gulp/tasks/reset.js"; // удаляет файлы из dist
import { html } from "./gulp/tasks/html.js"; // сборка html файлов (header, footer), обработка путей '@img' (1/2), добавление picture, добавления версий файлов, выгрузка html файлов в dist, обновление страницы локального сервера сервера.
import { server } from "./gulp/tasks/server.js"; // нстройка и запуск локального сервера.
import { scss } from "./gulp/tasks/scss.js"; // компеляция scss в css без сжатия ('expanded'), группировка медиа запросов, добавление в css правил по отображению webp, если тег html содержит соответствующий класс, добавление префиксов для кроссбраузерности, выгрузка css файлов в dist, обновление страницы локального сервера сервера.
import { js } from "./gulp/tasks/js.js"; // webpack, выгрузка js файлов в dist, обновление страницы локального сервера сервера.
import { images } from "./gulp/tasks/images.js"; // сжимает картинки, создаёт их webp версию и выгружает их в dist, выгрузка .svg в dist без изменений, обновление страницы локального сервера сервера.
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js"; // конвертирует исходные шрифты в .ttf, тем самым подготовив их к конвертации в нужные нам оптимизированые форматы .woff и .woff2. Конвертирует в woff и .woff2. Если css файлы с подключениями шрифтов не создаан, создаёт его и заполняет.
import { svgSprive } from "./gulp/tasks/svgSprive.js"; // создаёт .svg спрайт и выгружает его в dist
import { zip } from "./gulp/tasks/zip.js"; // архивирует dist
import { ftp } from "./gulp/tasks/ftp.js"; // выгружает dist по ftp

// Наблюдение за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy);//gulp.series(copy, ftp) - если нужно видеть изменеия файлов в FTP
	gulp.watch(path.watch.html, html);//gulp.series(html, ftp)
	gulp.watch(path.watch.scss, scss);//gulp.series(scss, ftp)
	gulp.watch(path.watch.js, js);//gulp.series(js, ftp)
	gulp.watch(path.watch.images, images);//gulp.series(images, ftp)
}

export { svgSprive } // npm run svgSprive

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp); //gulp.parallel(watcher, ftp)

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Выполнение сценария по умолчанию
gulp.task('default', dev);

//перенести файлы gulp, src, gulpfile.js, package.json, package-lock.json
//"del":"^6.1.1"

// npm i - установука gulp в новый проект.
// npm run dev - сборка в режиме разрабочика (без: группировки медиа запросов css, автопрефиксора css,сжатия css, сжатия и конвертирования изображений, добавления версий файлов).
// ctrl + c - вызод из режима разработчика.
// npm run build - сборка в режиме продакшана (без наблюдателя и запуская сервера).
// npm run svgSprive - создать SVGспрайта.
// npm run zip - создать архив продакшана.
// npm run deploy - выгрузка продакшана по фтп.

// закоментил добавление версий к файлам в 'gulp\tasks\html.js'
// закоментил переимнование ccs файлов в 'min.css' 'New-project\gulp\tasks\scss.js'
// закоментил не сжатого дуля css 'New-project\gulp\tasks\scss.js'
// закоментил сжатие css файлов 'New-project\gulp\tasks\scss.js'
// закоментил webpack 'New-project\gulp\tasks\js.js'
