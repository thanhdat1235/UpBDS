const express = require('express');

const router = express.Router();

const meController = require('../app/controllers/MeController')

router.get('/libs/products', meController.libs)

router.get('/trash/products', meController.trash)

module.exports = router;