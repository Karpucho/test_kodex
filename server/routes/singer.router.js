const Router = require('express');
const { Singer } = require('../db/models');

const router = new Router();

router.get('/', async (req, res) => {
  try {
    const singers = await Singer.findAll({
      // where: {
      //   id: 1,
      // },
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

// router.post('/', async (req, res) => {
//   try {

//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {

//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {

//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
