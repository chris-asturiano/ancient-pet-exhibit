const mongoose = require('mongoose')
const ProgressSchema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    progress: {
        type: ProgressSchema.Types.ObjectId,
        ref: 'Progress'
    }
})

module.exports = mongoose.model('User', UserSchema)