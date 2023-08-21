const mongoose = require('mongoose')
require('dotenv').config();

const mongoDbAtlasConnectionString = process.env.REACT_APP_MONGODB_ATLAS_CONNECTION_STRING;
mongoose.connect(`${mongoDbAtlasConnectionString}`, {useNewUrlParser: true});

const db = mongoose.connection

module.exports = db
