const Router = require('express');
const { Op } = require('sequelize');
const { Singer, Song } = require('../db/models');
const { singerQuery, songQuery } = require('../utils/configureQuery');

const router = new Router();

router.get('/', async (req, res) => {
  try {
    const { query } = req;
    const singerObject = singerQuery(query);
    const songObject = songQuery(query);

    const songs = await Song.findAll({
      where: songObject,
      raw: true,
      attributes: ['id', 'name'],
      include: {
        model: Singer,
        where: singerObject, // разобраться с поиском по певцу
        attributes: ['id', 'name'],
      },
    });

    return res.status(200).json(songs);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const song = await Song.findOne({
      where: { id },
      raw: true,
      attributes: ['id', 'name'],
      include: {
        model: Singer,
        attributes: ['id', 'name'],
      },
    });

    return res.status(200).json(song);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, singer_id } = req.body;

    await Song.create({
      name,
      singer_id,
    });

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, singer_id } = req.body;
    const { id } = req.params;

    await Song.update({ name, singer_id }, {
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

    await Song.destroy({
      where: { id },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
