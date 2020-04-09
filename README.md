# Проект "Florete"
> Сервис для проведения опросов в реальном времени.  С испанского "florete" переводится как "рапира".

## Установка и использование

OS X & Linux:

```sh
npm install 
npm run start
```
Приложение откроется по адресу localhost:3000

Figma: https://www.figma.com/file/d5082EpG69nu2uxOubAwiV/Florette

Прототип: https://www.figma.com/proto/d5082EpG69nu2uxOubAwiV/Florette?node-id=0%3A1

## Использование

В сервисе есть две роли - пользователь и администратор.

Пользователь может поучаствать в опросе под своим логином и оценить доклад 
из списка по трем пунктам: форма, содержание и интерес, а также оставить коментарий.

Администратор может:
- Создавать новые опросы 
- Отслеживать статус всех опросов
- Просматривать результаты конкретного опроса
- Добавлять нового пользователя 
- Просматривать списки всех пользователей

## Разработка

```sh
make install
npm run dev
```
Перед запуском приложения, запустится линтер и в случае успешной проверки приложение запустится на localhost:3000

## Контакты

Solodovnikova Ekaterina – [@1dovnikova](https://twitter.com/1dovnikova) – colo18@yandex.ru - [KatySolo](https://github.com/KatySolo/)

Проект на GH - [Project "Florete"](https://github.com/users/KatySolo/projects/1)
## Как внести вклад в проект

1. Создайте форк (<https://github.com/KatySolo/realtimepollreact>)
2. Создайте свою ветку с предлагаемыми изменениями (`git checkout -b feature/fooBar`)
3. Создайте коммит (`git commit -am 'add some new feature'`)
4. Запуште в ветку (`git push origin feature/fooBar`)
5. Создайте новый PR

### Предупреждения
>!! ВНИМАНИЕ !!
>
>В настоящее время существует n проблем, над решением которых мы работаем.
>
>1) Пользователь должен вводить имя СТРОГО из списка, который доступен администратору.
>2) Невозможно добавить нового администратора самостоятельно
>3) TBC
