const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema and model

const bookSchema = new Schema({
    title: String,
    pages: Number
})

const authorSchema = new Schema({
    name: String,
    age: Number,
    books: [bookSchema]
})

const Authors = mongoose.model('authors', authorSchema)

module.exports = Authors