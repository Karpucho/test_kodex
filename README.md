# test_kodex
Приложение для работы с каталогом музыки.<br> Основные возможности:<br> - Создать, прочитать, изменить, удалить записи об исполнителях.<br> - Создать, прочитать, изменить, удалить записи о песнях исполнителей.<br>
Реализованы клиентская и серверная части.

## Инструкция по запуску приложения
Файл с настройками БД лежит по пути:
> server/db/config/config.json

1. После клонирования приложения перейти в папку 'client'<br>
``` JS
cd client
```

2. Установить пакеты<br>
``` JS
npm i
```

3. Выйти из папки client<br>
``` JS
cd ..
```

4. Перейти в папку 'server'<br>
``` JS
cd server
```

5. Установить пакеты<br>
``` JS
npm i
```

6. Создать базу данных<br>
``` JS
npx sequelize db:create
```

7. Мигрировать базу<br>
``` JS
npx sequelize db:migrate
```

8. Засеять сиды<br>
``` JS
npx sequelize db:seed:all
```

9. Запустить сервер<br>
``` JS
npm run dev
```

10. Выйти из папки server<br>
``` JS
cd ..
```

11. Перейти в папку 'client'<br>
``` JS
cd client
```

12. Запустить приложение<br>
``` JS
npm start
```

## Возможности API

### Певцы
> GET /api/singers - перечень всех музыкантов

Есть возможность фильтровать по query:
singerSlice - поиск по части имени музыканта

> GET /api/singers/:id - поиск музыканта по id.

> POST /api/singers - добавление нового музыканта в базу.
Тело запроса:
- name : string - Имя добавляемого музыканта

> PUT /api/singers/:id - редактирование информации о певце по id.
Тело запроса:
- name : string - Новое имя для певца

> DELETE /api/singers/:id - удаление певца по id.

### Песни
> GET /api/songs - перечень всех песен

Есть возможность фильтровать по query:
songsSlice - поиск по части названия песни

> GET /api/songs/:id - поиск песни по id.

> POST /api/songs - добавление новой песни в базу.

Тело запроса:
- name : string - Название добавляемой песни
- singerSlice : number - id певца

> PUT /api/songs/:id - редактирование информации о песни по id.
Тело запроса:
- name : string - Новое название для песни
- singerSlice : number - id певца

> DELETE /api/songs/:id - удаление песни по id.

### Стек приложения

Frontend: React, React-Query<br>
Backend: Node.JS, Express, PostgreSQL, Sequelize ORM.

### Скриншоты
[![2022-05-20-17-11.png](https://i.postimg.cc/pdMqGJMc/2022-05-20-17-11.png)](https://postimg.cc/XrxfXFJ9)
[![2022-05-20-17-14.png](https://i.postimg.cc/bYn0M2LK/2022-05-20-17-14.png)](https://postimg.cc/5jxFQyh3)
[![2022-05-20-17-15.png](https://i.postimg.cc/ZKZNMsWd/2022-05-20-17-15.png)](https://postimg.cc/8sKsFHBp)
[![2022-05-20-17-15-1.png](https://i.postimg.cc/s2tQ9TF1/2022-05-20-17-15-1.png)](https://postimg.cc/XZkYncY0)
