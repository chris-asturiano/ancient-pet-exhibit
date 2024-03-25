const mongoose = require('mongoose')

const DialogueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sprite: {
        type: String,
        required: true,
        default: 'default.jpg'
    }, 
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Dialogue', DialogueSchema)