const Router = require('express');
const songController = require('../controllers/songController')

const router = new Router();

router.get('/', songController.getSongs);
router.get('/:id', songController.getSongById);
router.post('/', songController.createSong);
router.put('/:id', songController.updateSong);
router.delete('/:id', songController.deleteSong);

module.exports = router;
