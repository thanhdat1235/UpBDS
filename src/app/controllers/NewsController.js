class NewsController {
    // [GET]/news
    index(req, res, next) {
        res.render('news')
    }

    show(req, res, next) {
        res.send('Details News ')
    }
}

module.exports = new NewsController;