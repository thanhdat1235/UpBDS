const express = require('express');

const router = express.Router();

const partialController = require('../app/controllers/PartialController')

router.get('/showimg', partialController.showimg)

module.exports = router;