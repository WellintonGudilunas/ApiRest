const mongoose = require('mongoose');

const Person = mongoose.model('Person', { // VAI CRIA UMA COLLECTION NO MONGO COMO 'Person' 
    name: String,
    salary: Number,
    approved: Boolean,
}); 

module.exports = Person;