const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema and model
const userSchema = new Schema({
    name:String,
    age:Number
})

const Users = mongoose.model('users',userSchema)

module.exports = Users