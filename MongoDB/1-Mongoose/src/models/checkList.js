const mongoose = require('mongoose')

//Modelo a ser usado no documento
const checklistSchama = mongoose.Schema({
    name: {type: String, require: true},
    task: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
}]
})

module.exports = mongoose.model('Checklist',checkListSchama)