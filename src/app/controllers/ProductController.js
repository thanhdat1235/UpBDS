const res = require('express/lib/response');
const Product = require('./models/Products')
const { mongooseToObject } = require('../../util/mongoose')
class ProductController {
    // [GET]/
    show(req, res, next) {
            Product.findOne({ slug: req.params.slug })
                .then((product) => {
                    res.render('product/show', { product: mongooseToObject(product) });
                })
                .catch(next);
        }
        // [POST]/ product/create
    create(req, res, next) {
        res.render('product/create')
    }

    // [POST]/ product/store
    libs(req, res, next) {
        const product = new Product(req.body)
        product.save();
        res.redirect('/me/libs/products')
    }

    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => res.render('product/edit', {
                product: mongooseToObject(product)
            }))
            .catch(next);
    }

    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/libs/products'))
            .catch(next);
    }

    delete(req, res, next) {
        Product.delete({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next);
    }

    restore(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    force(req, res, next) {
        Product.deleteOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next);
    }


}

module.exports = new ProductController;