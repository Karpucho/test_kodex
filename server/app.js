const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./db/models');

const singerRouter = require('./routes/singer.router');
const songRouter = require('./routes/song.router');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: ['*'],
}));

app.use('/api/singers', singerRouter);
app.use('api/songs', songRouter);

app.listen(PORT, async () => {
  console.log('Сервер запущен на порту:', PORT);

  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно');
  } catch {
    console.log('Не получилось подключиться к БД');
  }
});
