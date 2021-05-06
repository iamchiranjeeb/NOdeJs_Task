const express = require('express');
const datas = require('../models/data')
const sortToAge = require('../sorts/ageSort')

const router = express.Router();

router.post('/data',async(req, res)=>{
    const data = new datas(req.body)
    try {
        await data.save();
        res.status(201).send(data)
    }catch(err){
        res.status(404).send(err.message)
    }
})

router.get('/data',async(req, res)=>{
    const data = await datas.find({})
    try {
        res.status(200).send(data.sort(sortToAge))
    }catch(err){
        res.status(404).send(err.message)
    }
})


router.get('/totalmarks',async(req, res)=>{
    const mark = await datas.find({})
    try {
        var totalMarks = 0
        for (let i=0;i<mark.length;i++) {
            totalMarks += mark[i].marks
        }
        res.status(200).json({
            totalMarks: totalMarks
        })
    }catch(err) {
        res.status(500).send(err.message)
    }
})


module.exports = router
