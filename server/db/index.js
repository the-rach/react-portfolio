const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB', {useNewUrlParser: true});

const db = mongoose.connection

module.exports = db
