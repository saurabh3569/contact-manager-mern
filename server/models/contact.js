const mongoose = require('mongoose')

const PhoneBookSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    number : {
        type:String,
        required:true
    },
})

const PhoneBook = new mongoose.model('PhoneBook',PhoneBookSchema)

module.exports = PhoneBook 