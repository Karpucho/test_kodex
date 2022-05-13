const Router = require('express');
const { Op } = require('sequelize');
const { Singer } = require('../db/models');
const isMoneta = require('../utils/isMoneta');
const {singerQuery} = require('../utils/configureQuery')

const router = new Router();

router.get('/', async (req, res) => {
  try {
    const { query } = req;
    const singerObject = singerQuery(query);

    // const obj = {};
    // obj.name = { [Op.substring]: name };

    const singers = await Singer.findAll({
      where: singerObject,
      raw: true,
      attributes: ['id', 'name'],
    });

    return res.status(200).json(singers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const singer = await Singer.findOne({
      where: { id },
      raw: true,
      attributes: ['id', 'name'],
    });

    return res.status(200).json(singer);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    if (isMoneta(name)) {
      return res.sendStatus(451);
    }

    await Singer.create({
      name,
    });

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    if (isMoneta(name)) {
      return res.sendStatus(451);
    }

    await Singer.update({ name }, {
      where: { id },
    });

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Singer.destroy({
      where: { id },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
