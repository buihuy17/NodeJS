
const { create } = require('express-handlebars');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required: true },
    string: { type: String, default: 'Tải và cài đặt' },
    img: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name' , unique : true},
},{
    typestamps: true,
}
);

module.exports = mongoose.model('Course', Course);