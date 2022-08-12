const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.home);

router.use('/product', require('./product'));

module.exports = router;