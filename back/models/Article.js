const mongoose = require('mongoose')
const article = new mongoose.Schema({
    title: {
        type: String,
        default: ''
    },
    paragraphs: {
        type: [],
        default: []
    },
    imageSystemPath: {
        type: String,
        default: ''
    },
    imagePath: {
        type: String,
        default: ''
    }
})

const mongoArticles = mongoose.model('articles', article)
module.exports = { mongoArticles }