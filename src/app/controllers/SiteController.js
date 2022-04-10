const res = require("express/lib/response");
const Product = require("./models/Products");
const { mutipleMongooseOject } = require("../../util/mongoose");

class SiteController {
    // [GET]/
    index(req, res, next) {
        Product.find({})
            .then((productsRes) => {
                var products = productsRes.map((item) => {
                    var parts = item.price.toString().split(".");
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    item.price = parts.join(".");
                    return item;
                });

                res.render("home", {
                    products: mutipleMongooseOject(products),

                });
            })
            .catch(next);
    }


    form(req, res, next) {
        res.render("form");
    }
}

module.exports = new SiteController();

// function numberWithCommas(x) {
//     var parts = x.toString().split(".");
//     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return parts.join(".");
// }