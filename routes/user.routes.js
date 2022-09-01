const router = require('express').Router();
const controller = require('../controllers/index.controller');

router.get('/', controller.user.getAllData);
router.post('/', controller.user.sendData);

module.exports = router;