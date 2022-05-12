const Router = require('express');
const Singer = require('../db/models');

const router = new Router();

router.get('/', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
