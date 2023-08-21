const mongoose = require('mongoose')
require('dotenv').config();

/**
 * MongoDB Atlas connection string from environment variables.
 * @type {string}
 */
const mongoDbAtlasConnectionString = process.env.REACT_APP_MONGODB_ATLAS_CONNECTION_STRING;

/**
 * Establishes a connection to the MongoDB Atlas database.
 *
 * @param {Object} options - Connection options.
 * @param {boolean} options.useNewUrlParser - Whether to use the new URL parser.
 */
mongoose.connect(`${mongoDbAtlasConnectionString}`, {useNewUrlParser: true});

/**
 * The MongoDB database connection object.
 * @type {Object}
 */
const db = mongoose.connection

module.exports = db
