const mongoose = require('mongoose')

//Modelo a ser usado no documento
const taskSchama = mongoose.Schema({
    name: {type: String, require: true},
    done: {type: Boolean, default: false},
    checkList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CheckList',
        require: true
    }
})

module.exports = mongoose.model('Task',taskSchama)