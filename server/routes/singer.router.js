const Router = require('express');
const singerController = require('../controllers/singerController')

const router = new Router();

router.get('/', singerController.getSingers);
router.get('/:id', singerController.getSingerById);
router.post('/', singerController.createSinger);
router.put('/:id', singerController.updateSinger);
router.delete('/:id', singerController.deleteSinger);

module.exports = router;
