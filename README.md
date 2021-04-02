# Платформа Доки

Дока — это место, в котором мы с огоньком перекапываем документацию по веб-разработке. Наша цель сделать ее практичной, понятной и не унылой.

Этот репозиторий содержит платформу для сайта «[Дока](y-doka.site/)», которая собирает статьи из [отдельного репозитория](github.com/y-Doka/platform).

## Как устроен сайт

Сайт «Доки» работает на базе [Eleventy](https://www.11ty.dev), которая собирает статьи — Markdown-файлы в HTML-страницы для вашего браузера при помощи Nunjucks-темплейтов.

## Как работать

Для работы с платформой вам потребуется [Node.js v14+](https://nodejs.org/en/) и npm v7+.

Чтобы запустить свою локальную версию Доки нужно:
1. скачать репозитории с контентом и платформой в одну папку
1. установить зависимости командой `npm i`
1. запустить скрипт кросслинковки командой `node make-links.js` у вас в папке `./src` появятся нужные папки с контентом из соседнего репозитория
1. запустить локальный веб-сервер командой `npm start`
