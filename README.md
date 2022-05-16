# test_kodex
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

8. Запустить сервер<br>
``` JS
npm run dev
```

9. Выйти из папки server<br>
``` JS
cd ..
```

10. Перейти в папку 'client'<br>
``` JS
cd client
```

11. Запустить приложение<br>
``` JS
npm start
```
