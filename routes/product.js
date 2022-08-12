const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

router.get('/', controller.products);
router.get('/search/:title', controller.search);

router.post('/create', controller.create);

module.exports = router;