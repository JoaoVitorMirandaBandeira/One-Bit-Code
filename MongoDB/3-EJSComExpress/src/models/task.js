const mongoose = require('mongoose')

//Modelo a ser usado no documento
const taskSchama = mongoose.Schema({
    name: {type: String, require: true},
    done: {type: Boolean, default: false},
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        require: true
    }
})

module.exports = mongoose.model('Task',taskSchama)