const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Education = new Schema(
    { 
        type: { type: String },
        time: { type: String },
        place: { type: String },
        info: { type: String }

    }
)

module.exports = mongoose.model('education', Education)