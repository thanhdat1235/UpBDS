const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Product = new Schema({
    name: { type: String, maxLength: 250 },
    img: { type: String },
    video_id: { type: String },
    desc: { type: String, maxLength: 300 },
    price: { type: String },
    address: { type: String, maxLength: 300 },
    slug: { type: String, slug: "name", unique: true }
}, { timestamps: true })

mongoose.plugin(slug);

Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Product', Product);