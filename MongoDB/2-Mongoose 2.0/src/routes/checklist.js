const express = require('express')
const Checklist = require('../models/checklist')

const routes = express.Router()

routes.get('/', async (req, res) => {
    try {
        let checklist = await Checklist.find({})
        res.status(200).json(checklist)
    } catch (error) {
        res.status(500).json(error)
    }
})

routes.post('/', async (req, res) => {
    let { name } = req.body
    try {
        let checklists = await Checklist.create({ name })
        res.status(200).send(checklists)
    } catch (error) {
        res.status(422).json(error)
    }
})

routes.get("/:id", async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
})

routes.put('/:id', async (req, res) => {
    let { name } = req.body
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, { new: true })
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

routes.delete('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})


module.exports = routes