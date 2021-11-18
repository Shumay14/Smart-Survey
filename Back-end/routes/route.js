const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/api/:alias', controller.getQuery);
router.post('/api/:alias', controller.postQuery);

module.exports = router;