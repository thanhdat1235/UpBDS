const express = require('express');

const router = express.Router();

const productController = require('../app/controllers/ProductController')

router.get('/create', productController.create)

router.post('/libs', productController.libs)

router.get('/:id/edit', productController.edit)

router.put('/:id', productController.update)

router.patch('/:id/restore', productController.restore)

router.delete('/:id', productController.delete)

router.delete('/:id/force', productController.force)

router.get('/:slug', productController.show)

module.exports = router;