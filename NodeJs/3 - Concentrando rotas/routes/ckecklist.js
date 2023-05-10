const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    console.log("Ola")
    res.send()
})

routes.post('/', (req,res) => {
    console.log(req.bory)
    res.status(200).send(req.body)
})

routes.get("/:id", (req,res) => {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})


module.exports = routes