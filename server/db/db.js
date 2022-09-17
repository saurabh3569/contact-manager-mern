const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://username:<password>@cluster0.oylio.mongodb.net/PhoneBook?retryWrites=true&w=majority',()=>{
    console.log('db connected');
})


