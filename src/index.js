const express = require('express');
const app = express();
require('./db/mongoose')
const datas = require('./models/data')
const dataRoutes = require("./routes/data")


const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.json())
app.use(dataRoutes)


app.get('/', (req, res) => {
    res.send("Hey World !")
})


app.listen(PORT,HOST,(err)=>{
    if(err){
        console.log(err.message)
    }
    console.log("Server is on : " + HOST + ":" + PORT);
})