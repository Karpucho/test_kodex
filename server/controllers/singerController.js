/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
const { Singer } = require('../db/models');
const isMoneta = require('../utils/isMoneta');
const { singerQuery } = require('../utils/configureQuery');

class SingerController {
  async getSingers(req, res) {
    try {
      const { query } = req;
      const singerObject = singerQuery(query);

      const singers = await Singer.findAll({
        where: singerObject,
        raw: true,
        attributes: ['id', 'name'],
      });

      return res.status(200).json(singers);
    } catch (error) {
      console.log(error);
      req.error = error;
      res.sendStatus(500);
    }
  }

  async getSingerById(req, res) {
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
      req.error = error;
      res.sendStatus(500);
    }
  }

  async createSinger(req, res) {
    try {
      const { name } = req.body;

      if (isMoneta(name)) {
        return res.sendStatus(451);
      }

      if (!name) {
        return res.sendStatus(400);
      }

      await Singer.create({
        name,
      });

      return res.sendStatus(201);
    } catch (error) {
      console.log(error);
      req.error = error;
      res.sendStatus(500);
    }
  }

  async updateSinger(req, res) {
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
      req.error = error;
      res.sendStatus(500);
    }
  }

  async deleteSinger(req, res) {
    try {
      const { id } = req.params;

      await Singer.destroy({
        where: { id },
      });

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      req.error = error;
      res.sendStatus(500);
    }
  }
}

module.exports = new SingerController();
