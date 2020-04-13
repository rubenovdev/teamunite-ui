# Teams

### Общая информация

**По верстке:**

- Начинаем верстку с мобильной версии от 320px, поддерживаем до 2000px
- Ссылки, не уводящие пользователя со страницы делаем тегом `<button>`, а уводящие тегом `<a>`
- Содержимое тегов выносим на отдельную строку
- Всем `<button>`, `<a>`, `<input>` и `<textarea>` устанавливаем поведение при focus и active
- Изображениям проставляем фиксированные размеры в теге через атрибуты `width`, `height`
- У тега `<button>` проставляем атрибут `type="button"`
- Всегда добавляем на страницу тег `<h1>`, если он неуместен, то скрываем
- Используем `min-width: ;`, `max-width: ;` и `min-height: ;`, `max-height: ;`, но если значение в `%`, то `width: ;` и `height: ;`

### Работа с ветками

**Перед выполнением новой задачи** переходим на `develop`, пуллим последние изменения, создаем новую ветку с названием задачи и работаем в ней

```bash
git checkout develop                # переходим на ветку "develop"
git pull                            # стягиваем изменения с удаленного репозитория
git checkout -b название-ветки      # создаем новую ветку и сразу переходим на нее, например TM-102
```

---

**Во время выполнения задачи** фиксируем изменения и отправляем их на удаленный репозиторий

```bash
git add .
git commit -m 'описываем, что сделали'
git push origin название-ветки
```

**После выполнения задачи** пушим последние изменения в нашу ветку и создаем Pull Request на Bitbucket

В Pull Request описываем что было сделано, указываем reviewers, и в assignees указываем себя

---

**Памятка по Git**

```bash
git status  - просмотр состояния файлов
git add - индексация изменений для последующего коммита
git commit - фиксация изменений в репозитории с комментированием
git push - отправка изменений в удаленный репозиторий
git clone - склонировать удаленный репозиторий
git pull - извлечение данных с удаленного репозитория
git branch - создание новой ветки
git checkout - переход на другую ветку
```

### Традиционные media-запросы

```
min-width: 320px // mobile
min-width: 768px // tablet
min-width: 1024px // desktop-11
min-width: 1300px // desktop-13
min-width: 1500px // desktop-15
min-width: 2048px // tv
```

### Подключение к серверу через FTP

**Хост:** teamunite.ru

**Имя пользователя:** u0712620_team

**Пароль:** CdSTePakJ2ycw3Q8
