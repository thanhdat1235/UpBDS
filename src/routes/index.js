const newsRouter = require('./news')
const meRouter = require('./me')
const partialRouter = require('./partial')
const siteRouter = require('./site')
const productRouter = require('./product')

function route(app) {



    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/partial', partialRouter);

    app.use('/products', productRouter)

    app.use('/', siteRouter);

}

module.exports = route;