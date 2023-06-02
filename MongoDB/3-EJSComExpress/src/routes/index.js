const express =require('express')

const routes = express.Router()

routes.get('/', async (req,res)=>{
    res.render('pages/index')
})

module.exports = routes