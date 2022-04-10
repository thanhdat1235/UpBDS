const res = require('express/lib/response');
const Product = require('./models/Products')
const { mutipleMongooseOject } = require('../../util/mongoose')

class MeController {
    // [GET]/
    libs(req, res, next) {

        Promise.all([Product.find({}), Product.countDocumentsDeleted()])
            .then(([products, deletedCound]) =>
                res.render('me/libs', {
                    deletedCound,
                    products: mutipleMongooseOject(products)
                })

            )
            .catch(next);
    }

    trash(req, res, next) {
        Product.findDeleted({})
            .then(products => res.render('me/trash', {
                products: mutipleMongooseOject(products)
            }))
            .catch(next);
    }
}
module.exports = new MeController;