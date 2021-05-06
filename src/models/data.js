const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    age:{
        type: Number,
        required:true,
    },
    marks:{
        type: Number,
        required:true,
    }
})

const task = mongoose.model('task', taskSchema)

module.exports = task