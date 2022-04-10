const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Showimg = new Schema({
    text: { type: String },
    title: { type: String },
    slug: { type: String, slug: "name", unique: true }
}, { timestamps: true })

mongoose.plugin(slug);

Showimg.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Showimg', Showimg);