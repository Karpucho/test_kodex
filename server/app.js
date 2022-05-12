const path = require('path');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./db/models');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: ['*'],
}));

app.listen(PORT, async () => {
  console.log('Сервер запущен на порту:', PORT);

  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно');
  } catch {
    console.log('Не получилось подключиться к БД');
  }
});
