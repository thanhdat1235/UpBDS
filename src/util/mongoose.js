module.exports = {
    mutipleMongooseOject: function(mongooseArrs) {
        return mongooseArrs.map(mongooseArrs => mongooseArrs.toObject())
    },
    mongooseToObject: function(mongooseArrs) {
        return mongooseArrs ? mongooseArrs.toObject() : mongooseArrs;
    }
}