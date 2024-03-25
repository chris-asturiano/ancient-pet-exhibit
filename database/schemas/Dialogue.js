const mongoose = require('mongoose')

const DialogueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Dialogue', DialogueSchema)