const mongoose = require('mongoose')

//const connURL = 'mongodb://127.0.0.1:27017/taskDB'

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
},()=>{
    console.log("connected to DB.")
})
