const res = require('express/lib/response');
const Showimg = require('./models/Showimgs')
const { mutipleMongooseOject } = require('../../util/mongoose')
class PartialController {
    // [GET]/
    showimg(req, res, next) {
        Showimg.find({})
            .then(
                showimgs => res.render('home', {
                    showimgs: mutipleMongooseOject(showimgs)
                }))
    }
}
module.exports = new PartialController;