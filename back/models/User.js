const mongoose = require('mongoose')
const user = new mongoose.Schema({
    Login: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        unique: true
    },
    Password: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    FirstName: {
        type: String,
        default: ''
    },
    LastName: {
        type: String,
        default: ''
    },
    PhoneNumber: {
        type: String,
        default: ''
    }
})

const mongoUser = mongoose.model('users', user)
module.exports = { mongoUser }