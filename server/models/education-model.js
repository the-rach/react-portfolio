const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Represents the Education schema for MongoDB documents.
 * @class
 */
const Education = new Schema(
    { 
        type: { type: String },
        time: { type: String },
        place: { type: String },
        info: { type: String }

    }
)

/**
 * The Mongoose model for the 'education' collection.
 * @type {EducationModel}
 */
module.exports = mongoose.model('education', Education)